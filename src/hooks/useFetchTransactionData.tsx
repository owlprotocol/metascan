import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transaction } from '@leovigna/web3-redux';

// Hook for fetching all data required to render Transaction page
function useFetchTransactionData(txnHash: string) {
    const dispatch = useDispatch();

    // TODO: Replace with ORM selectors.
    // @ts-ignore
    const { currentNetworkId } = useSelector((state) => state?.app);

    useEffect(() => {
        dispatch(Transaction.fetch({ networkId: currentNetworkId, hash: txnHash }));
    }, [currentNetworkId, txnHash, dispatch]);

    const txnData = useSelector((state) => Transaction.selectById(state, `${currentNetworkId}-${txnHash}`));
    return txnData;
}

export default useFetchTransactionData;
