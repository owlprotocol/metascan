import React from 'react';
import styled from 'styled-components';
import { Table as ReactstrapTable } from 'reactstrap';
import { shortenHash, shortenHashLength } from '../../utils';
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

interface BlockItem {
    hash: string;
    age: string;
    from: string;
    to: string;
    value?: string;
    tokenId?: number;
    token: string;
}

export interface Props {
    data?: BlockItem[];
    ERC721: boolean;
}

const ERC20_HEADER_LABELS = ['txn hash', 'age', 'from', 'to', 'value', 'token'];
const ERC721_HEADER_LABELS = ['txn hash', 'age', 'from', 'to', 'token ID', 'token'];

const TokenTxnsTable = ({ data, ERC721 }: Props) => {
    const tableData = (item: BlockItem, label: string) => {
        // @ts-ignore
        let data = item[label];
        switch (label) {
            case 'txn hash':
                data = shortenHash(item['hash']);
                break;
            case 'parent txn hash':
                data = shortenHashLength(item['hash'], 32);
                break;
            case 'from':
                data = shortenHash(item[label]);
        }

        return data;
    };
    return (
        <Wrapper>
            <ReactstrapTable responsive>
                <thead>
                    <tr>
                        {(ERC721 ? ERC721_HEADER_LABELS : ERC20_HEADER_LABELS).map((label, idx) => (
                            <th key={label}>{label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item: BlockItem) => {
                        return (
                            <tr key={item.hash}>
                                {(ERC721 ? ERC721_HEADER_LABELS : ERC20_HEADER_LABELS).map((label) => (
                                    <th scope="row" key={label}>
                                        <BlockItemHeadContainer className={label === 'method' ? 'method' : ''}>
                                            {{
                                                'txn hash': (
                                                    <Link to={`/txn/${item.hash}`}>{tableData(item, label)}</Link>
                                                ),
                                                from: <Link to={`/txn/${item.from}`}>{tableData(item, label)}</Link>,
                                                to: <Link to={`/txn/${item.to}`}>{tableData(item, label)}</Link>,
                                                'token ID': <Link to={'/???'}>{tableData(item, label)}</Link>,
                                                token: <Link to={'/???'}>{tableData(item, label)}</Link>,
                                            }[label] || tableData(item, label)}
                                        </BlockItemHeadContainer>
                                    </th>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>

                {!data?.length && (
                    <tr>
                        <div style={{ padding: '20px' }}>No Data Available</div>
                    </tr>
                )}
            </ReactstrapTable>
        </Wrapper>
    );
};

export default TokenTxnsTable;
