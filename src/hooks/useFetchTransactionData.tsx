import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transaction } from '@leovigna/web3-redux';
// import { NETWORKS, ChainId } from '../constants/network';

// Hook for fetching all data required to render Transaction page
function useFetchTransactionData(txnHash: string) {
    const dispatch = useDispatch();

    // TODO: Replace with ORM selectors.
    // @ts-ignore
    const { currentNetworkId } = useSelector((state) => state?.app);
    console.log(currentNetworkId);

    useEffect(() => {
        dispatch(Transaction.fetch({ networkId: currentNetworkId, hash: txnHash }));
    }, [currentNetworkId, txnHash, dispatch]);
}

export default useFetchTransactionData;
