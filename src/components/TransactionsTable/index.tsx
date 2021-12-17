import styled from 'styled-components';
import { Table as ReactstrapTable } from 'reactstrap';
import { shortenHash } from '../../utils';

const Wrapper = styled.div`
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
    hash: string;
    method: string;
    block: string;
    age: string;
    from: string;
    to: string;
    value: string;
    'txn fee': string;
}

export interface Props {
    data?: BlockItem[];
}

const HEADER_LABELS = ['hash', 'method', 'block', 'age', 'from', 'to', 'value', 'txn fee'];

const TransactionsTable = ({ data }: Props) => {
    const tableData = (item: BlockItem, label: string) => {
        // @ts-ignore
        let data = item[label];

        switch (label) {
            case 'hash':
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
                                        {tableData(item, label)}
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

export default TransactionsTable;
