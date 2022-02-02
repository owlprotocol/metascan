import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { SearchBar, AddressBar, CopyToClipboard, TokenPriceCard } from '../../components';
import { NAV_LINKS } from '../../constants';
import { ReactComponent as QuestionMarkIcon } from '../../icons/questionMark.svg';
import { useEthPrice } from '../../hooks';
import { ArrowRight, Checkmark, Clipboard, DetailButton, ETH } from '../../svg';
import composeHooks from 'react-hooks-compose';
import Web3 from 'web3';
import {
    Wrapper,
    HeroWrapper,
    SearchBarWrapper,
    Headline,
    AccountDetailsCard,
    DetailsTitle,
    CurrencyDetailsCard,
    TxnStatusWrapper,
    Navigation,
    TxnDataWrapper,
    SeeMoreButton,
} from './styles';
import useTransactionPage from './useTransactionPage';

interface PresenterProps {
    hash?: string;
    gasPrice?: string;
    confirmations?: string;
    recipient?: string;
    blockNumber?: string;
    from?: string;
    to?: string;
    value?: string;
    txFee?: string;
}

const TransactionPagePresenter = ({
    hash = '',
    gasPrice = '',
    confirmations = '',
    recipient = '',
    blockNumber = '',
    from = '',
    to = '',
    value = '',
    txFee = '',
}: PresenterProps) => {
    const ethPrice = useEthPrice();
    return (
        <Wrapper>
            <HeroWrapper>
                <SearchBarWrapper>
                    <SearchBar />
                </SearchBarWrapper>

                <Container>
                    <Row>
                        <Headline>
                            <ETH />
                            Ethereum Transaction
                        </Headline>
                    </Row>

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
                                        <span className="confirmed-text">
                                            Confirmed - {confirmations} confirmations
                                        </span>
                                    </div>
                                </TxnStatusWrapper>

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

                                <div>
                                    <DetailsTitle>Recipients (1)</DetailsTitle>
                                    <div>{recipient}</div>
                                </div>
                            </CurrencyDetailsCard>
                        </Col>
                        <Col xs="12" md="3">
                            <AccountDetailsCard>
                                <TokenPriceCard />
                            </AccountDetailsCard>
                        </Col>
                    </Row>
                </Container>
            </HeroWrapper>

            <Container>
                <Navigation>
                    {NAV_LINKS.map((link, key) => (
                        <NavLink to={link.href} key={key}>
                            {link.label}
                        </NavLink>
                    ))}
                    <button>
                        <DetailButton />
                    </button>
                </Navigation>
                <TxnDataWrapper>
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
                                Gas price
                            </span>
                            <span>{Web3.utils.fromWei(Web3.utils.hexToNumberString(gasPrice))} Ether</span>
                        </div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Timestamp
                            </span>
                            <span>
                                10 days 14 hrs ago (Nov 29 2021 02:24:15 PM +UTC)
                                <span className="sm-text"> | Confirmed within 1 minute</span>
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
                                To Interacted with
                            </span>
                            <span>
                                Contract &nbsp;
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
                                {value} ETH ({(ethPrice * parseFloat(value)).toFixed(2)}) $
                            </span>
                        </div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Transaction fee
                            </span>
                            <span>
                                {txFee} Ether ({(ethPrice * parseFloat(txFee)).toFixed(2)}) $
                            </span>
                        </div>
                    </div>
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
                    <div>
                        <SeeMoreButton>
                            Click to see more
                            <svg
                                width="21"
                                height="10"
                                viewBox="0 0 21 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.1379 9.99662C9.79957 9.99727 9.47169 9.88108 9.21117 9.66822L0.523098 2.52905C0.22739 2.2867 0.0414294 1.93843 0.00612727 1.56087C-0.0291749 1.18332 0.0890726 0.807395 0.334856 0.515808C0.58064 0.22422 0.933826 0.0408521 1.31672 0.0060419C1.69961 -0.0287683 2.08084 0.0878306 2.37655 0.330189L10.1379 6.72688L17.8992 0.558643C18.0474 0.440039 18.2178 0.351468 18.4007 0.298022C18.5837 0.244576 18.7755 0.227308 18.9652 0.24721C19.155 0.267113 19.3388 0.323794 19.5063 0.413995C19.6737 0.504197 19.8214 0.626141 19.9409 0.772818C20.0736 0.91963 20.174 1.09186 20.2359 1.27873C20.2979 1.4656 20.3201 1.66307 20.301 1.85877C20.282 2.05447 20.2222 2.24419 20.1253 2.41604C20.0285 2.58789 19.8967 2.73817 19.7382 2.85745L11.0501 9.75389C10.7821 9.93311 10.461 10.0186 10.1379 9.99662Z"
                                    fill="#5092C5"
                                />
                            </svg>
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
                    </div>
                </TxnDataWrapper>
            </Container>
        </Wrapper>
    );
};

const TransactionPageContainer = composeHooks(() => ({
    useTransactionPage: () => useTransactionPage(),
}))(TransactionPagePresenter) as (props: any) => JSX.Element;

export default TransactionPageContainer;
