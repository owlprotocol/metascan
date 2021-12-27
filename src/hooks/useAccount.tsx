import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Account } from '@leovigna/web3-redux';

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
    const accountObj: Account.Interface = useSelector<Account.Interface>(
        selectCurrAddr(networkId, accountAddr),
    ) as Account.Interface;

    const item = { networkId: networkId, address: accountAddr };
    useEffect(() => {
        dispatch(Account.create(item));
        dispatch(Account.fetchBalance(item));
        dispatch(Account.fetchNonce(item));
    }, [accountAddr]);
    return accountObj;
}

export default useAccount;
