import styled from 'styled-components';
import { Table as ReactstrapTable } from 'reactstrap';

const Wrapper = styled.div`
    /* background-color: ${(props) => props.theme.primary}; */

    .table {
        color: #70797b;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
    }

    .table > thead {
        background-color: #ffffff;
        color: #70797b;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        text-transform: capitalize;
        border-top-color: #cde7ec;
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

    .table > :not(caption) > * > * {
        box-shadow: none;
    }
`;

interface BlockItem {
    block: string;
    age: string;
    txn: string;
    uncles: string;
    miner: string;
    'gas used': string;
    'gas limit': string;
    'base fee': string;
}

export interface Props {
    data?: BlockItem[];
}

const HEADER_LABELS = ['block', 'age', 'txn', 'uncles', 'miner', 'gas used', 'gas limit', 'base fee'];

const Table = ({ data }: Props) => {
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
                    {data?.map((item: BlockItem, key) => {
                        return (
                            <tr key={key}>
                                {HEADER_LABELS.map((label, key) => (
                                    <th scope="row" key={key}>
                                        {/* @ts-ignore */}
                                        {item[label]}
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

export default Table;
