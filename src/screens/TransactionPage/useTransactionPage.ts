//@ts-nocheck
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNetworkCreate, useFetchTransactionData } from '../../hooks';
import Web3 from 'web3';
import { TransactionReceipt } from 'web3-core';
import { NETWORKS, ChainId } from '../../constants/network';

const web3Url = NETWORKS[ChainId.INFURA].WSS as string;

export const useTransactionPageHook = () => {
    useNetworkCreate();
    const params = useParams();
    // Deploy throws on: Property 'txnHash' does not exist on type '{}'.  TS2339
    // @ts-ignore
    const { txnHash } = params as string;
    const transactionData = useFetchTransactionData(txnHash) as PresenterProps;

    //can be replaced once web3-redux tracks latest block number
    const [transaction, setTransaction] = useState(transactionData);
    useEffect(() => {
        (async () => {
            const web3 = new Web3(web3Url);
            const currBlockNum = await web3.eth.getBlockNumber();
            const transactionReceipt: TransactionReceipt = await web3.eth.getTransactionReceipt(txnHash);
            let txFee = '';
            if (transactionReceipt)
                txFee = Web3.utils.fromWei(
                    //@ts-ignore effectiveGasPrice not in TransactionReceipt interface
                    (transactionReceipt.gasUsed * Web3.utils.hexToNumber(transactionReceipt.effectiveGasPrice)) //@ts-ignore
                        .toString(),
                );
            if (!transactionData) return;

            setTransaction({
                ...transactionData,
                confirmations: (currBlockNum - parseInt(transactionData.blockNumber || '0')).toString(),
                txFee,
                value: Web3.utils.fromWei(transactionData.value || '0'),
            });
        })();
    }, [txnHash, transactionData]);

    if (!transaction) return;
    return transaction;
};

export default useTransactionPageHook;
