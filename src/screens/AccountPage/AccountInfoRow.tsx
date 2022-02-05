import { Row, Col } from 'reactstrap';
import { fromWei, isAddress, toBN } from 'web3-utils';
import { AddressBar, TokenDropDown } from '../../components';
import { CurrencyDetailsCard } from './styles';

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
    //Customize per chain
    //const networkName = 'Ethereum';
    const networkCurrency = 'Ether';

    const ethPriceBN = toBN(ethPrice.toFixed(0));
    const balanceETH = fromWei(balance);
    const balanceUSD = parseFloat(fromWei(toBN(balance).mul(ethPriceBN))).toFixed(2);

    const isValidAddress = address && isAddress(address);
    const ethPriceRounded = Math.round(ethPrice * 100) / 100;
    return isValidAddress ? (
        <Row>
            {/*<Col xs="12" md="3">
                <AccountDetailsCard>

                                <div>First balance change</div>
                                <div>Received {firstBalanceChange} ago</div>
                                <div>Last balance change</div>
                                <div>Sent {lastBalanceChange} ago</div>

                    <div>Transaction count</div>
                    <div>{nonce}</div>
                </AccountDetailsCard>
            </Col>*/}
            <Col xs="12" md="12">
                <CurrencyDetailsCard>
                    <AddressBar address={address} title={isContract ? 'Contract' : 'Address'} />
                    {/*<div>
                        <Metascan />
                        <a href="/">View address on other chains</a>
                            </div>*/}
                    <div className="flex">
                        <span>Balance</span>
                        <span>
                            {balanceETH} {networkCurrency}
                        </span>
                    </div>
                    <div className="flex">
                        <span>Value</span>
                        <span>
                            {balanceUSD} USD (@ ${ethPriceRounded}/ETH)
                        </span>
                    </div>
                    <div className="flex">
                        <span>Nonce</span>
                        <span>{nonce}</span>
                    </div>
                    <TokenDropDown networkId={networkId} accountAddress={address} />
                </CurrencyDetailsCard>
            </Col>
            {/*<Col xs="12" md="3">
                <AccountDetailsCard>
                    <div>More Info</div>
                    <div>
                        My name tag
                        <a href="/login">Login</a>
                    </div>
                </AccountDetailsCard>
            </Col>*/}
        </Row>
    ) : (
        <div>Invalid Ethereum Address</div>
    );
};

export default AccountInfoRow;
