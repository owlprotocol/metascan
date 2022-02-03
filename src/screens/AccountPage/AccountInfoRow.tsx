import { Row, Col } from 'reactstrap';
import { fromWei, isAddress } from 'web3-utils';
import { Metascan } from '../../svg';
import { AddressBar, TokenDropDown } from '../../components';
import { AccountDetailsCard, CurrencyDetailsCard } from './styles';

export interface AccountInfoRowProps {
    networkId: string;
    address?: string;
    nonce?: number;
    //firstBalanceChange?: string;
    //lastBalanceChange?: string;
    balance?: string;
    ethPrice?: number;
    isContract?: boolean;
}
export const AccountInfoRow = ({
    networkId,
    address,
    nonce = 0,
    //firstBalanceChange,
    //lastBalanceChange,
    balance = '0',
    ethPrice = 0,
    isContract = false,
}: AccountInfoRowProps) => {
    const isValidAddress = address && isAddress(address);
    const ethPriceRounded = Math.round(ethPrice * 100) / 100;
    const balanceUSD = balance ? (parseFloat(fromWei(balance)) * ethPrice).toFixed(2) : '0.0';
    return isValidAddress ? (
        <Row>
            <Col xs="12" md="3">
                <AccountDetailsCard>
                    {/*
                                <div>First balance change</div>
                                <div>Received {firstBalanceChange} ago</div>
                                <div>Last balance change</div>
                                <div>Sent {lastBalanceChange} ago</div>
                                */}
                    <div>Transaction count</div>
                    <div>{nonce}</div>
                </AccountDetailsCard>
            </Col>
            <Col xs="12" md="6">
                <CurrencyDetailsCard>
                    <AddressBar address={address} title={isContract ? 'Contract' : 'Address'} hasQR />
                    <div>
                        <Metascan />
                        <a href="/">View address on other chains</a>
                    </div>
                    <div className="flex">
                        <span>Balance</span>
                        <span>{balance ? fromWei(balance) : '0'} ETH</span>
                    </div>
                    <div className="flex">
                        <span>Ether Value</span>
                        <span>
                            {balanceUSD} USD (@ ${ethPriceRounded}/ETH)
                        </span>
                    </div>
                    <TokenDropDown networkId={networkId} accountAddress={address} />
                </CurrencyDetailsCard>
            </Col>
            <Col xs="12" md="3">
                <AccountDetailsCard>
                    <div>More Info</div>
                    <div>
                        My name tag
                        <a href="/login">Login</a>
                    </div>
                </AccountDetailsCard>
            </Col>
        </Row>
    ) : (
        <div>Invalid Ethereum Address</div>
    );
};

export default AccountInfoRow;
