import { Table as ReactstrapTable } from 'reactstrap';
import TransactionRow from '../TransactionRow';
import { Wrapper } from './styles';

export interface Props {
    networkId: string;
    hashList: string[];
}

//const HEADER_LABELS = ['txn hash', 'method', 'block', 'age', 'from', 'to', 'value', 'txn fee'];
//const INTERNAL_HEADER_LABELS = ['parent txn hash', 'block', 'age', 'from', 'to', 'value'];

export const TransactionsTable = ({ networkId, hashList }: Props) => {
    return (
        <Wrapper>
            <ReactstrapTable responsive>
                <thead>
                    <tr>
                        <th>{'txn hash'}</th>
                        <th>{'method'}</th>
                        <th>{'block'}</th>
                        <th>{'age'}</th>
                        <th>{'from'}</th>
                        <th>{'to'}</th>
                        <th>{'value'}</th>
                        <th>{'txn fee'}</th>
                    </tr>
                </thead>
                <tbody>
                    {hashList.map((hash: string) => {
                        return <TransactionRow networkId={networkId} hash={hash} key={hash} />;
                    })}
                </tbody>

                {hashList.length == 0 && (
                    <tr>
                        <div style={{ padding: '20px' }}>No Data Available</div>
                    </tr>
                )}
            </ReactstrapTable>
        </Wrapper>
    );
};

export default TransactionsTable;
