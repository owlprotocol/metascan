import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { useBlock } from '@owlprotocol/web3-redux/block/hooks';
import { useTransaction } from '@owlprotocol/web3-redux/transaction/hooks';
import { fromWei, toBN } from 'web3-utils';
import moment from 'moment';
import { omit } from 'lodash';
import { SearchBar, CopyToClipboard } from '../../components';
import { ReactComponent as QuestionMarkIcon } from '../../icons/questionMark.svg';
import { useEthPrice } from '../../hooks';
import { ETH } from '../../svg';
import { ADDRESS_0 } from '../../test/data';
import composeHooks from 'react-hooks-compose';
import { Wrapper, SearchBarWrapper, Headline, TxnDataWrapper } from './styles';
export interface Props {
    networkId: string;
    hash: string;
}
export const useTransactionPage = ({ networkId, hash }: Props) => {
    const ethPrice = useEthPrice();
    const transaction = useTransaction(networkId, hash);
    const block = useBlock(networkId, transaction?.blockNumber as number | undefined);
    const timeStamp = transaction?.timeStamp ?? block?.timestamp;
    console.debug({ timeStamp });
    //Avoid override warning
    return { ethPrice, timeStamp, ...omit(transaction, ['networkId', 'hash']) };
};

export interface PresenterProps {
    hash: string;
    //confirmations?: number;
    value?: string;
    gasPrice?: string;
    gas?: number;
    gasUsed?: number;
    blockNumber?: number;
    from?: string;
    to?: string;
    timeStamp?: number;
    ethPrice?: number;
}

export const TransactionPagePresenter = ({
    hash,
    //confirmations = 0,
    value = '0',
    gas = 0,
    gasPrice = '0',
    gasUsed = 0,
    blockNumber = 0,
    from = ADDRESS_0,
    to = ADDRESS_0,
    timeStamp = 0,
    ethPrice = 0,
}: PresenterProps) => {
    //Customize per chain
    const networkName = 'Ethereum';
    const networkCurrency = 'Ether';

    const ethPriceBN = toBN(ethPrice.toFixed(0));
    const valueETH = fromWei(value);
    const valueUSD = fromWei(toBN(value).mul(ethPriceBN));

    const txFeeBN = toBN(gasPrice).mul(toBN(gasUsed || gas));
    const txFeeWei = txFeeBN.toString();
    const txFee = fromWei(txFeeWei);
    const txFeeUSD = fromWei(txFeeBN.mul(ethPriceBN));

    //10 days 14 hrs ago (Nov 29 2021 02:24:15 PM +UTC)
    const timeStampDate = moment(timeStamp * 1000);
    const timeStampFormatted = timeStampDate.format('MMM Do YYYY h:mm:ss A');
    const timeSinceFormatted = timeStampDate.fromNow();

    const gasPriceGwei = fromWei(gasPrice, 'gwei');
    const gasPriceETH = fromWei(gasPrice);

    return (
        <Wrapper>
            <SearchBarWrapper>
                <SearchBar />
            </SearchBarWrapper>

            <Row>
                <Headline>
                    <ETH />
                    {networkName} Transaction
                </Headline>
            </Row>

            {/*<TransactionInfoRow
                        hash={hash}
                        confirmations={confirmations}
                        valueWei={valueWei}
                        txFeeWei={txFeeWei}
                    />*/}

            <Container>
                {/*<Navigation>
                    {NAV_LINKS.map((link, key) => (
                        <NavLink to={link.href} key={key}>
                            {link.label}
                        </NavLink>
                    ))}
                    <button>
                        <DetailButton />
                    </button>
                    </Navigation>*/}
                <TxnDataWrapper>
                    <div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Transaction Hash
                            </span>
                            <span>
                                {hash}
                                <CopyToClipboard text={hash} />
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Block
                            </span>
                            <span>
                                <NavLink to={`/block/${blockNumber}`}>{blockNumber}</NavLink>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Timestamp
                            </span>
                            <span>
                                {timeSinceFormatted} ({timeStampFormatted})
                                {/*span className="sm-text"> | Confirmed within 1 minute</span>*/}
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                From
                            </span>
                            <span>
                                <NavLink to={`/address/${from}`}>{from}</NavLink>
                                <CopyToClipboard text={from} />
                            </span>
                        </div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                To {/*Interacted with*/}
                            </span>
                            <span>
                                {/*Contract &nbsp;*/}
                                <NavLink to={`/address/${to}`}>{to}</NavLink>
                                <CopyToClipboard text={to} />
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Value
                            </span>
                            <span>
                                {valueETH} {networkCurrency} (${valueUSD})
                            </span>
                        </div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Transaction fee
                            </span>
                            <span>
                                {txFee} {networkCurrency} (${txFeeUSD})
                            </span>
                        </div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Gas price
                            </span>
                            <span>
                                {gasPriceETH} {networkCurrency} ({gasPriceGwei} Gwei)
                            </span>
                        </div>
                    </div>
                    {/*
                    <div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Tokens Transferred
                            </span>
                            <span>
                                From 0x63cd72389dc...To Uniswap V2: USDC-USDT 2 For 2,500 <br />
                                From 0x63cd72389dc...To Uniswap V2: USDC-USDT 2 For 2,500 <br />
                                From 0x63cd72389dc...To Uniswap V2: USDC-USDT 2 For 2,500 <br />
                            </span>
                        </div>
                    </div>
                    */}
                    {/*<div>
                        <SeeMoreButton>
                            Click to see more
                            <ArrowDown />
                        </SeeMoreButton>
                    </div>
                    <div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Privacy note
                            </span>
                            <span>
                                <a href="#">To access the Private note feature, you must be Logged In</a>
                            </span>
                        </div>
                </div>*/}
                </TxnDataWrapper>
            </Container>
        </Wrapper>
    );
};

export const TransactionPage = composeHooks((props: Props) => ({
    useTransactionPage: () => useTransactionPage(props),
}))(TransactionPagePresenter) as (props: Props) => JSX.Element;
//@ts-expect-error
TransactionPage.displayName = 'TransactionPage';

export default TransactionPage;
