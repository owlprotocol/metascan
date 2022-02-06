import { useFetchEvents, EventSignature } from '../../hooks';
import { Table as ReactstrapTable } from 'reactstrap';
import { shortenHash } from '../../utils';
import styled from 'styled-components';
import { Log } from 'web3-core';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    .table {
        color: #70797b;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        overflow-x: scroll;
    }

    .table > thead {
        background-color: #ffffff;
        color: #70797b;
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        text-transform: capitalize;
        border-top-color: #cde7ec;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 12px;
        white-space: nowrap;
    }

    .table > :not(:first-child) {
        border: 0;
    }

    .table > tbody > tr:nth-of-type(odd) > * {
        background: #eaf4f4;
    }

    .table > tbody > tr:nth-of-type(even) > * {
        background: #fafafa;
    }

    tbody:before {
        content: '-';
        display: block;
        line-height: 0.5em;
        color: transparent;
    }

    .table > :not(caption) > * > * {
        box-shadow: none;
    }

    .method {
        background-color: #fff;
        border-radius: 8px;
        margin: 0;
        padding: 0 10px;
    }
`;

const BlockItemHeadContainer = styled.div`
    white-space: nowrap;
    width: fit-content;
    font-size: 1rem;
    font-weight: 500;

    a {
        text-decoration: none;
        color: #5092c5;
    }
`;

const HEADER_LABELS = ['txn hash', 'method', 'logs'];

const EventLog = ({ accountAddr }: any) => {
    const tableData = (item: Log & { eventSig: EventSignature } & { methodId: string }, label: string) => {
        // @ts-ignore
        let data = item[label];
        switch (label) {
            case 'txn hash':
                data = shortenHash(item['transactionHash']);
                break;
            case 'method':
                data = item.methodId.substring(0, 10);
                break;
            case 'logs':
                data = item['eventSig'];
                break;
        }

        return data;
    };

    const eventLogs = useFetchEvents(accountAddr);
    return (
        <Wrapper>
            <ReactstrapTable responsive>
                <thead>
                    <tr>
                        {HEADER_LABELS.map((label, idx) => (
                            <th key={idx}>{label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {eventLogs?.map((item: Log & { eventSig: EventSignature } & { methodId: string }) => {
                        return (
                            //@ts-ignore
                            <tr key={item.id}>
                                {HEADER_LABELS.map((label) => (
                                    <th scope="row" key={label}>
                                        <BlockItemHeadContainer className={label === 'method' ? 'method' : ''}>
                                            {{
                                                'txn hash': (
                                                    <Link to={`/tx/${item.transactionHash}`}>
                                                        {tableData(item, label)}
                                                    </Link>
                                                ),

                                                logs: (
                                                    <div>
                                                        {(() => {
                                                            const data = tableData(item, label);
                                                            return (
                                                                <>
                                                                    <span>{data.funcName}(</span>
                                                                    {data.args?.map((arg: string, i: number) => (
                                                                        <span key={i}>
                                                                            {i !== 0 ? ', ' : ''}
                                                                            {arg}
                                                                        </span>
                                                                    ))}
                                                                    <span>)</span>
                                                                </>
                                                            );
                                                        })()}
                                                    </div>
                                                ),
                                            }[label] || tableData(item, label)}
                                        </BlockItemHeadContainer>
                                    </th>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </ReactstrapTable>
            {!eventLogs?.length && <div style={{ padding: '21px' }}>No Data Available</div>}
        </Wrapper>
        // <div>
        //     {eventLogs?.map((event: any) => (
        //         // <div key={event.id}>{`method sig: ${event.eventSig ? event.eventSig.funcName : 'Unknown'}`}</div>
        //     ))}
        // </div>
    );
};
export default EventLog;
