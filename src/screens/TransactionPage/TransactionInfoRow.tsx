import { Row, Col } from 'reactstrap';
import { fromWei } from 'web3-utils';
import { AddressBar } from '../../components';
import { Checkmark } from '../../svg';
import { AccountDetailsCard, DetailsTitle, CurrencyDetailsCard, TxnStatusWrapper } from './styles';

export interface TransactionInfoRowProps {
    hash: string;
    confirmations?: number;
    valueWei?: string;
    txFeeWei?: string;
}
export const TransactionInfoRow = ({
    hash,
    confirmations = 0,
    valueWei = '0',
    txFeeWei = '0',
}: TransactionInfoRowProps) => {
    const value = fromWei(valueWei);
    const txFee = fromWei(txFeeWei);
    return (
        <Row>
            <Col xs="12" md="3">
                <AccountDetailsCard>
                    <AddressBar address={hash} title="Transaction Hash" />
                    <DetailsTitle>Amount Transacted</DetailsTitle>
                    <div>{value} ETH</div>
                    <DetailsTitle>Transaction Fee</DetailsTitle>
                    <div>{txFee} ETH</div>
                </AccountDetailsCard>
            </Col>
            <Col xs="12" md="6">
                <CurrencyDetailsCard>
                    <TxnStatusWrapper>
                        <div>Transaction status</div>
                        <div>
                            <Checkmark />
                            <span className="confirmed-text">Confirmed - {confirmations} confirmations</span>
                        </div>
                    </TxnStatusWrapper>

                    {/*
                    <div className="flex">
                        <div>
                            <ArrowRight />
                            <a href="/receipt">Additional info</a>
                        </div>
                        <div>
                            <Clipboard />
                            <a href="/receipt">Transaction receipt</a>
                        </div>
                    </div>
                    */}

                    {/*
                    <div>
                        <DetailsTitle>Recipients (1)</DetailsTitle>
                        <div>{recipient}</div>
                    </div>
                    */}
                </CurrencyDetailsCard>
            </Col>
            {/*
            <Col xs="12" md="3">
                <AccountDetailsCard>
                    <TokenPriceCard />
                </AccountDetailsCard>
            </Col>
            */}
        </Row>
    );
};

export default TransactionInfoRow;
