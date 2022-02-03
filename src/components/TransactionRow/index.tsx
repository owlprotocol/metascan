import { useTransaction } from '@owlprotocol/web3-redux/transaction/hooks';
import composeHooks from 'react-hooks-compose';
import { Link } from 'react-router-dom';

export interface Props {
    networkId: string;
    hash: string;
}
export const useTransactionRow = ({ networkId, hash }: Props) => {
    const transaction = useTransaction(networkId, hash);
    return { ...transaction };
};

export interface PresenterProps {
    hash: string;
    blockNumber: number;
    from: string;
    to: string;
}
export const TransactionRowPresenter = ({ hash, blockNumber, from, to }: PresenterProps) => {
    return (
        <tr key={hash}>
            <th scope="row" key="hash">
                <Link to={`/txn/${hash}`}>{hash}</Link>
            </th>
            <th scope="row" key="block">
                <Link to={`/block/${blockNumber}`}>{blockNumber}</Link>
            </th>
            <th scope="row" key="from">
                <Link to={`/address/${from}`}>{from}</Link>
            </th>
            <th scope="row" key="to">
                <Link to={`/address/${to}`}>{to}</Link>
            </th>
        </tr>
    );
};

export const TransactionRow = composeHooks((props: Props) => ({
    useTransactionRow: () => useTransactionRow(props),
}))(TransactionRowPresenter) as (props: Props) => JSX.Element;

export default TransactionRow;
