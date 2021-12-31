import { useEffect, useState } from 'react';
import { NETWORKS, ChainId } from '../constants/network';
import { Log } from 'web3-core';
import Web3 from 'web3';
import axios from 'axios';

const web3URL = NETWORKS[ChainId.INFURA].WSS as string;

export interface EventSignature {
    funcName: string;
    args: string[];
}

//assumes address is of a valid contract
function useFetchEvents(accountAddr: string) {
    const [events, setEvents] = useState<(Log & { eventSig: EventSignature })[]>();

    useEffect(() => {
        (async () => {
            try {
                const web3 = new Web3(web3URL);
                const pastLogs = await web3.eth.getPastLogs({
                    fromBlock: 13914500,
                    address: accountAddr,
                });
                setEvents(
                    await Promise.all(
                        pastLogs.slice(pastLogs.length - 25, pastLogs.length).map(async (e: Log) => {
                            const eventSigRes = await axios.get(
                                `https://www.4byte.directory/api/v1/event-signatures/?hex_signature=${e.topics[0]}`,
                            );
                            const eventSig: string = eventSigRes?.data.results[0].text_signature;
                            const funcName: string = eventSig?.substring(0, eventSig.indexOf('('));
                            const args: string[] = eventSig
                                ?.substring(eventSig.indexOf('(') + 1, eventSig.indexOf(')'))
                                .split(',');
                            return { ...e, eventSig: { funcName, args } };
                        }),
                    ),
                );
            } catch (err) {
                console.log(err);
            }
        })();
    }, [accountAddr]);

    return events;
}

export default useFetchEvents;
