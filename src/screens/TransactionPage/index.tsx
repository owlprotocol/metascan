import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { SearchBar, AddressBar, CopyToClipboard, TokenPriceCard } from '../../components';
import { NAV_LINKS } from '../../constants';
import { MetascanCardWrapper, NavigationWrapper } from '../../styles/Common';
import { ReactComponent as QuestionMarkIcon } from '../../icons/questionMark.svg';
import { useFetchTransactionData } from '../../hooks';

import { useSelector, useDispatch } from 'react-redux';
import { Transaction } from '@leovigna/web3-redux';
import { useNetworkCreate } from '../../hooks/index';

const Wrapper = styled.div`
    padding-bottom: 10vw;

    .container {
        padding: 40px 0;
        margin: 0 auto;
    }
`;

const Headline = styled.div`
    font-size: 36px;
    line-height: 20px;
    letter-spacing: 0.1px;
    margin-bottom: 60px;

    svg {
        margin-right: 13px;
    }
`;

const SearchBarWrapper = styled.div`
    max-width: 936px;
    margin: 0 auto;
    top: -25px;
    position: relative;
    z-index: 1;
`;

const HeroWrapper = styled.div`
    background: #fafafa;
    min-height: 580px;
`;

const AccountDetailsCard = styled(MetascanCardWrapper)`
    > div:not(:last-of-type) {
        margin-bottom: 12px;
    }

    > div:nth-child(odd) {
        color: rgb(112 121 123 / 55%);
        font-size: 18px;
        line-height: 25px;
    }

    > div:nth-child(even) {
        color: #70797b;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;

        a {
            float: right;
            color: #5092c5;
            text-decoration: none;
            font-size: 16px;
        }
    }
`;

const CurrencyDetailsCard = styled(MetascanCardWrapper)`
    > div {
        color: #70797b;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
    }

    > div:not(:last-of-type) {
        margin-bottom: 12px;
    }

    a {
        color: #5092c5;
        text-decoration: none;
        font-size: 16px;
        margin-left: 8px;
    }

    span:first-of-type {
        width: 150px;
    }

    span:last-of-type {
        flex: 1;
        text-align: left;
    }
`;

const DetailsTitle = styled.div`
    font-size: 18px;
    line-height: 25px;
    color: rgba(112, 121, 123, 0.7);
`;

const Navigation = styled(NavigationWrapper)`
    margin-bottom: 0;
`;

const TxnDataWrapper = styled.div`
    padding: 12px 22px 5vw;

    a {
        text-decoration: none;
    }

    > div {
        border-radius: 12px;
        padding: 16px 18px;
        color: #70797b;
        margin-bottom: 6px;

        > div {
            display: flex;
        }

        > div:not(:last-of-type) {
            margin-bottom: 12px;
        }

        span {
            font-weight: 500;
            font-size: 20px;
            line-height: 25px;
        }

        .title {
            width: 100%;
            max-width: 350px;
            display: flex;
            align-items: center;

            svg {
                margin-right: 10px;
            }
        }

        .sm-text {
            font-weight: 400;
        }
    }

    > div:nth-child(odd) {
        background: #eaf4f4;
    }

    > div:nth-child(even) {
        background: #fafafa;
    }
`;

const SeeMoreButton = styled.div`
    display: flex;
    align-items: center;
    color: #5092c5;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;

    svg {
        margin-left: 12px;
    }
`;

const TxnStatusWrapper = styled.div`
    background: #cde7ec;
    border-radius: 12px;
    padding: 12px 20px;

    > div:last-of-type {
        display: flex;
        align-items: center;
        margin-top: 6px;

        svg {
            margin-right: 6px;
        }
    }

    .confirmed-text {
        color: #3f484a;
        font-weight: 500;
        font-size: 24px;
        line-height: 25px;
    }
`;

interface Props {
    txnAmount?: string;
    txnFee?: string;
    confirmations?: string;
    recipient?: string;
    blockNumber?: string;
    fromAddress?: string;
    toAddress?: string;
    txValue?: string;
    txFee?: string;
}

const TransactionPage = ({
    txnAmount = '1',
    txnFee = '1',
    confirmations = '12',
    recipient = '1',
    blockNumber = '123123123',
    fromAddress = '0x63cd72389dc25daf9a5c5016a4a6487d7471ce73',
    toAddress = '0x63cd72389dc25daf9a5c5016a4a6487d7471ce73',
    txValue = '3',
    txFee = '0.05',
}: Props) => {
    useNetworkCreate();
    const params = useParams();
    const dispatch = useDispatch();

    // Deploy throws on: Property 'txnHash' does not exist on type '{}'.  TS2339
    // @ts-ignore
    const { txnHash } = params as string;
    const transactionData = useFetchTransactionData(txnHash);
    console.log(transactionData);

    useEffect(() => {
        dispatch(Transaction.fetch({ networkId: '1', hash: txnHash }));
    }, [params, dispatch, txnHash]);

    const txnData = useSelector((state) => Transaction.selectById(state, `1-${txnHash}`));
    console.log({ txnData });

    return (
        <Wrapper>
            <HeroWrapper>
                <SearchBarWrapper>
                    <SearchBar />
                </SearchBarWrapper>

                <Container>
                    <Row>
                        <Headline>
                            <svg
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M54.2522 36.0457C50.9119 49.4457 37.3355 57.5914 23.9547 54.251C10.5543 50.9107 2.40857 37.335 5.749 23.9543C9.08923 10.5543 22.6459 2.40857 36.0463 5.749C49.4272 9.0697 57.5926 22.6455 54.2522 36.0457Z"
                                    fill="#2D7CFB"
                                />
                                <path
                                    d="M41.9922 30.375L30.125 37.625L18.25 30.375L30.125 10L41.9922 30.375ZM30.125 39.9531L18.25 32.7031L30.125 50L42 32.7031L30.125 39.9531Z"
                                    fill="#F5F5F5"
                                />
                            </svg>
                            Ethereum Transaction
                        </Headline>
                    </Row>

                    <Row>
                        <Col xs="12" md="3">
                            <AccountDetailsCard>
                                <AddressBar address={txnHash} title="Transaction Hash" />
                                <DetailsTitle>Amount Transacted</DetailsTitle>
                                <div>{txnAmount}</div>
                                <DetailsTitle>Transaction Fee</DetailsTitle>
                                <div>{txnFee}</div>
                            </AccountDetailsCard>
                        </Col>
                        <Col xs="12" md="6">
                            <CurrencyDetailsCard>
                                <TxnStatusWrapper>
                                    <div>Transaction status</div>
                                    <div>
                                        <svg
                                            width="42"
                                            height="42"
                                            viewBox="0 0 42 42"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.25 21C5.25 18.9317 5.65739 16.8836 6.4489 14.9727C7.24041 13.0619 8.40055 11.3256 9.86307 9.86307C11.3256 8.40055 13.0619 7.24041 14.9727 6.4489C16.8836 5.65739 18.9317 5.25 21 5.25C23.0683 5.25 25.1164 5.65739 27.0273 6.4489C28.9381 7.24041 30.6744 8.40055 32.1369 9.86307C33.5995 11.3256 34.7596 13.0619 35.5511 14.9727C36.3426 16.8836 36.75 18.9317 36.75 21C36.75 25.1772 35.0906 29.1832 32.1369 32.1369C29.1832 35.0906 25.1772 36.75 21 36.75C16.8228 36.75 12.8168 35.0906 9.86307 32.1369C6.90937 29.1832 5.25 25.1772 5.25 21Z"
                                                fill="#BFC8CA"
                                            />
                                            <path
                                                d="M14 21L19.25 26.25L28 17.5"
                                                stroke="#006874"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5.25 21C5.25 18.9317 5.65739 16.8836 6.4489 14.9727C7.24041 13.0619 8.40055 11.3256 9.86307 9.86307C11.3256 8.40055 13.0619 7.24041 14.9727 6.4489C16.8836 5.65739 18.9317 5.25 21 5.25C23.0683 5.25 25.1164 5.65739 27.0273 6.4489C28.9381 7.24041 30.6744 8.40055 32.1369 9.86307C33.5995 11.3256 34.7596 13.0619 35.5511 14.9727C36.3426 16.8836 36.75 18.9317 36.75 21C36.75 25.1772 35.0906 29.1832 32.1369 32.1369C29.1832 35.0906 25.1772 36.75 21 36.75C16.8228 36.75 12.8168 35.0906 9.86307 32.1369C6.90937 29.1832 5.25 25.1772 5.25 21V21Z"
                                                stroke="#006874"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <span className="confirmed-text">
                                            Confirmed - {confirmations} confirmations
                                        </span>
                                    </div>
                                </TxnStatusWrapper>

                                <div className="flex">
                                    <div>
                                        <svg
                                            width="6"
                                            height="14"
                                            viewBox="0 0 6 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.99797 7.00955C5.99836 7.21254 5.92865 7.40927 5.80093 7.56558L1.51743 12.7784C1.37202 12.9559 1.16306 13.0674 0.936524 13.0886C0.70999 13.1098 0.484437 13.0388 0.309485 12.8914C0.134532 12.7439 0.0245113 12.532 0.00362514 12.3023C-0.017261 12.0725 0.0526984 11.8438 0.198113 11.6664L4.03613 7.00955L0.335186 2.35274C0.264023 2.26387 0.210881 2.16161 0.178813 2.05185C0.146745 1.94208 0.136385 1.82698 0.148326 1.71314C0.160268 1.5993 0.194276 1.48898 0.248397 1.38851C0.302518 1.28804 0.375685 1.19942 0.463691 1.12772C0.551778 1.04815 0.655119 0.987894 0.767238 0.950716C0.879357 0.913537 0.99784 0.900242 1.11526 0.911661C1.23268 0.923079 1.34652 0.958966 1.44963 1.01708C1.55273 1.07518 1.6429 1.15426 1.71447 1.24935L5.85233 6.4622C5.95986 6.623 6.01114 6.81571 5.99797 7.00955Z"
                                                fill="#5092C5"
                                            />
                                        </svg>

                                        <a href="/receipt">Additional info</a>
                                    </div>
                                    <div>
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.2998 5.50005C3.2998 4.91657 3.53159 4.35699 3.94417 3.94441C4.35675 3.53183 4.91633 3.30005 5.4998 3.30005H13.1998C13.7833 3.30005 14.3429 3.53183 14.7554 3.94441C15.168 4.35699 15.3998 4.91657 15.3998 5.50005V13.2H18.6998V15.4C18.6998 16.2753 18.3521 17.1146 17.7333 17.7335C17.1144 18.3524 16.275 18.7 15.3998 18.7H6.5998C5.72459 18.7 4.88522 18.3524 4.26635 17.7335C3.64748 17.1146 3.2998 16.2753 3.2998 15.4V5.50005ZM15.3998 14.3V17.6C15.9833 17.6 16.5429 17.3683 16.9554 16.9557C17.368 16.5431 17.5998 15.9835 17.5998 15.4V14.3H15.3998ZM14.2998 17.6V5.50005C14.2998 5.20831 14.1839 4.92852 13.9776 4.72223C13.7713 4.51594 13.4915 4.40005 13.1998 4.40005H5.4998C5.20807 4.40005 4.92828 4.51594 4.72199 4.72223C4.5157 4.92852 4.3998 5.20831 4.3998 5.50005V15.4C4.3998 15.9835 4.63159 16.5431 5.04417 16.9557C5.45675 17.3683 6.01633 17.6 6.5998 17.6H14.2998ZM6.5998 7.15005C6.5998 7.00418 6.65775 6.86429 6.7609 6.76114C6.86404 6.658 7.00394 6.60005 7.1498 6.60005H11.5498C11.6957 6.60005 11.8356 6.658 11.9387 6.76114C12.0419 6.86429 12.0998 7.00418 12.0998 7.15005C12.0998 7.29592 12.0419 7.43581 11.9387 7.53896C11.8356 7.6421 11.6957 7.70005 11.5498 7.70005H7.1498C7.00394 7.70005 6.86404 7.6421 6.7609 7.53896C6.65775 7.43581 6.5998 7.29592 6.5998 7.15005ZM6.5998 10.45C6.5998 10.3042 6.65775 10.1643 6.7609 10.0611C6.86404 9.95799 7.00394 9.90005 7.1498 9.90005H11.5498C11.6957 9.90005 11.8356 9.95799 11.9387 10.0611C12.0419 10.1643 12.0998 10.3042 12.0998 10.45C12.0998 10.5959 12.0419 10.7358 11.9387 10.839C11.8356 10.9421 11.6957 11 11.5498 11H7.1498C7.00394 11 6.86404 10.9421 6.7609 10.839C6.65775 10.7358 6.5998 10.5959 6.5998 10.45ZM6.5998 13.75C6.5998 13.6042 6.65775 13.4643 6.7609 13.3611C6.86404 13.258 7.00394 13.2 7.1498 13.2H9.3498C9.49567 13.2 9.63557 13.258 9.73871 13.3611C9.84186 13.4643 9.89981 13.6042 9.89981 13.75C9.89981 13.8959 9.84186 14.0358 9.73871 14.139C9.63557 14.2421 9.49567 14.3 9.3498 14.3H7.1498C7.00394 14.3 6.86404 14.2421 6.7609 14.139C6.65775 14.0358 6.5998 13.8959 6.5998 13.75Z"
                                                fill="#5092C5"
                                            />
                                        </svg>

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
                        <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 10.5C0 4.97715 4.47715 0.5 10 0.5H24.125C29.6478 0.5 34.125 4.97715 34.125 10.5V25.5C34.125 31.0228 29.6478 35.5 24.125 35.5H10C4.47715 35.5 0 31.0228 0 25.5V10.5Z"
                                fill="#D9E2FF"
                            />
                            <path
                                d="M19.25 24.7308C19.25 25.2663 19.0195 25.7799 18.6093 26.1586C18.1991 26.5373 17.6427 26.75 17.0625 26.75C16.4823 26.75 15.9259 26.5373 15.5157 26.1586C15.1055 25.7799 14.875 25.2663 14.875 24.7308C14.875 24.1952 15.1055 23.6816 15.5157 23.303C15.9259 22.9243 16.4823 22.7115 17.0625 22.7115C17.6427 22.7115 18.1991 22.9243 18.6093 23.303C19.0195 23.6816 19.25 24.1952 19.25 24.7308ZM19.25 18C19.25 18.5355 19.0195 19.0491 18.6093 19.4278C18.1991 19.8065 17.6427 20.0192 17.0625 20.0192C16.4823 20.0192 15.9259 19.8065 15.5157 19.4278C15.1055 19.0491 14.875 18.5355 14.875 18C14.875 17.4645 15.1055 16.9509 15.5157 16.5722C15.9259 16.1935 16.4823 15.9808 17.0625 15.9808C17.6427 15.9808 18.1991 16.1935 18.6093 16.5722C19.0195 16.9509 19.25 17.4645 19.25 18ZM19.25 11.2692C19.25 11.8048 19.0195 12.3184 18.6093 12.697C18.1991 13.0757 17.6427 13.2885 17.0625 13.2885C16.4823 13.2885 15.9259 13.0757 15.5157 12.697C15.1055 12.3184 14.875 11.8048 14.875 11.2692C14.875 10.7337 15.1055 10.2201 15.5157 9.84142C15.9259 9.46274 16.4823 9.25 17.0625 9.25C17.6427 9.25 18.1991 9.46274 18.6093 9.84142C19.0195 10.2201 19.25 10.7337 19.25 11.2692Z"
                                fill="#545454"
                            />
                        </svg>
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
                                Gas price
                            </span>
                            <span>
                                <NavLink to={`/block/${blockNumber}`}>{blockNumber}</NavLink>
                            </span>
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
                                <NavLink to={`/address/${fromAddress}`}>{fromAddress}</NavLink>
                                <CopyToClipboard text={fromAddress} />
                            </span>
                        </div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Interacted with
                            </span>
                            <span>
                                Contract &nbsp;
                                <NavLink to={`/address/${toAddress}`}>{toAddress}</NavLink>
                                <CopyToClipboard text={toAddress} />
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Value
                            </span>
                            <span>{txValue} ETH (0.0) $</span>
                        </div>
                        <div>
                            <span className="title">
                                <QuestionMarkIcon />
                                Transaction fee
                            </span>
                            <span>{txFee} Ether (0.0) $</span>
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

export default TransactionPage;
