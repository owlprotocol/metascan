import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Web3 from 'web3';
import { Network } from '@leovigna/web3-redux';
import { NETWORKS, ChainId } from '../constants/network';

// Hook for creating web3 network connection
function useNetworkCreate() {
    const dispatch = useDispatch();

    useEffect(() => {
        // Note: replace with store current network ID.
        const currentNetwork = NETWORKS[ChainId.INFURA];
        const networkId = currentNetwork.ID as string;
        const networkURL = currentNetwork.WSS as string;
        const web3 = new Web3(networkURL);

        dispatch(Network.create({ networkId, web3 }));
    }, [dispatch]);
}

export default useNetworkCreate;
