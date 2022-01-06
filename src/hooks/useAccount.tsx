import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Account } from '@leovigna/web3-redux';
import { EOA_DETAILS, CONTRACT_DETAILS } from '../constants';
import { NETWORKS, ChainId } from '../constants/network';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

const supportsInterfaceABI: AbiItem[] = [
    {
        inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
];

const ERC721_INTERFACE_ID = '0x80ac58cd';
const ERC721METADATA_INTERFACE_ID = '0x5b5e139f';
const ERC721ENUMERABLE_INTERFACE_ID = '0x780e9d63';

const selectCurrAddr = (networkId: string, addr: string) =>
    createSelector(
        (state: any) => state.web3Redux.Account.itemsById,
        (items: Account.Interface[]) => {
            if (!items) return {};
            for (const item in items) {
                if (item === `${networkId}-${addr}`) return items[item];
            }
        },
    );

// const selectCurrContr = (networkId: string, addr: string) =>
//     createSelector(
//         (state: any) => state.web3Redux.Contract.itemsById,
//         (items: Contract.Interface[]) => {
//             for (const item in items) {
//                 if (!items) return {};
//                 if (item.toLowerCase() === `${networkId}-${addr}`) return items[item];
//             }
//         },
//     );
export interface ERC721 {
    isERC721: boolean;
    hasMetadata?: boolean;
    hasEnumerable?: boolean;
}

export interface Contract {
    isContract: boolean;
    bytecode?: string;
}

function useAccount(networkId: string, accountAddr: string) {
    const [validAddr] = useState<boolean>(() => Web3.utils.isAddress(accountAddr as string));

    const dispatch = useDispatch();

    const [contract, setContract] = useState<Contract>({ isContract: false });
    const [ERC721, setERC721] = useState<ERC721>({ isERC721: false });
    const [optionTabs, setOptionTabs] = useState<{ href: string; label: string }[]>(EOA_DETAILS);
    const account: Account.Interface = useSelector<Account.Interface>(
        selectCurrAddr(networkId, accountAddr),
    ) as Account.Interface;
    // const contract: Contract.Interface = useSelector<Contract.Interface>(
    //     selectCurrContr(networkId, accountAddr),
    // ) as Contract.Interface;

    useEffect(() => {
        if (!validAddr) return;
        const web3Instance = new Web3(NETWORKS[ChainId.INFURA].WSS);
        const item = { networkId: networkId, address: accountAddr };
        (async () => {
            const code = await web3Instance?.eth.getCode(accountAddr);
            if (code === '0x') return;
            const supportInterfaceSig = await web3Instance?.eth.abi.encodeFunctionSignature(
                'supportsInterface(bytes4)',
            );

            //check if the function supportsInterface is implemented, if it isn't, the contract cannot be ERC721
            const hasSupportsInterface = code.indexOf(supportInterfaceSig.slice(2, supportInterfaceSig.length)) > 0;

            setContract({ isContract: true, bytecode: code });
            setOptionTabs(CONTRACT_DETAILS);

            //if it implements supportsInterface, check if it is ERC721
            if (!hasSupportsInterface) return;
            const contr = new web3Instance.eth.Contract(supportsInterfaceABI, accountAddr);
            const isErc721 = await contr.methods.supportsInterface(ERC721_INTERFACE_ID).call();
            const hasMetadata = await contr.methods.supportsInterface(ERC721METADATA_INTERFACE_ID).call();
            const hasEnumerable = await contr.methods.supportsInterface(ERC721ENUMERABLE_INTERFACE_ID).call();
            setERC721({ isERC721: isErc721, hasMetadata: hasMetadata, hasEnumerable: hasEnumerable });
        })();
        dispatch(Account.create(item));
        dispatch(Account.fetchBalance(item));
        dispatch(Account.fetchNonce(item));
    }, [accountAddr, dispatch, networkId]);
    return { account, contract, optionTabs, ERC721 };
}

export default useAccount;
