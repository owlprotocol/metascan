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

function useAccount(networkId: string, accountAddr: string) {
    const dispatch = useDispatch();

    const web3Instance = new Web3(NETWORKS[ChainId.INFURA].WSS);
    const [isContract, setIsContract] = useState<boolean>();
    const [isERC721, setIsERC721] = useState<boolean>(false);
    const [optionTabs, setOptionTabs] = useState<{ href: string; label: string }[]>(EOA_DETAILS);
    const account: Account.Interface = useSelector<Account.Interface>(
        selectCurrAddr(networkId, accountAddr),
    ) as Account.Interface;

    const item = { networkId: networkId, address: accountAddr };
    useEffect(() => {
        (async () => {
            const code = await web3Instance?.eth.getCode(accountAddr);
            if (code !== '0x') {
                const supportInterfaceSig = await web3Instance?.eth.abi.encodeFunctionSignature(
                    'supportsInterface(bytes4)',
                );

                //check if the function supportsInterface is implemented, if it isn't, the contract cannot be ERC721
                const hasSupportsInterface = code.indexOf(supportInterfaceSig.slice(2, supportInterfaceSig.length)) > 0;

                //if it implements supportsInterface, check if it is ERC721
                if (hasSupportsInterface) {
                    const contr = new web3Instance.eth.Contract(supportsInterfaceABI, accountAddr);
                    const res = await contr.methods.supportsInterface(ERC721_INTERFACE_ID).call();
                    setIsERC721(res);
                }

                setIsContract(true);
                setOptionTabs(CONTRACT_DETAILS);
            } else {
                setIsContract(false);
            }
        })();
        dispatch(Account.create(item));
        dispatch(Account.fetchBalance(item));
        dispatch(Account.fetchNonce(item));
    }, [accountAddr]);
    return { account, isContract, optionTabs, isERC721 };
}

export default useAccount;
