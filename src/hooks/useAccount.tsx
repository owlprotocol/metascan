import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Account } from '@leovigna/web3-redux';
import { EOA_DETAILS, CONTRACT_DETAILS } from '../constants';
import { NETWORKS, ChainId } from '../constants/network';
import Web3 from 'web3';

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

export function useAccount(networkId: string, accountAddr: string) {
    const dispatch = useDispatch();

    const web3Instance = new Web3(NETWORKS[ChainId.INFURA].WSS);
    const [isContract, setIsContract] = useState<boolean>();
    const [optionTabs, setOptionTabs] = useState<{ href: string; label: string }[]>(EOA_DETAILS);
    const account: Account.Interface = useSelector<Account.Interface>(
        selectCurrAddr(networkId, accountAddr),
    ) as Account.Interface;

    const item = { networkId: networkId, address: accountAddr };
    useEffect(() => {
        (async () => {
            const code = await web3Instance?.eth.getCode(accountAddr);
            if (code !== '0x') {
                setIsContract(true);
                setOptionTabs(CONTRACT_DETAILS);
            } else {
                setOptionTabs(EOA_DETAILS);
                setIsContract(false);
            }
        })();
        dispatch(Account.create(item));
        dispatch(Account.fetchBalance(item));
        dispatch(Account.fetchNonce(item));
    }, [accountAddr]);
    return { account, isContract, optionTabs };
}
