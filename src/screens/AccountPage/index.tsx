import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import { SearchBar, AddressBar, TransactionsTable } from '../../components';
import { NAV_LINKS } from '../../constants';
import { MetascanCardWrapper, NavigationWrapper } from '../../styles/Common';

const Wrapper = styled.div`
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

const Navigation = styled(NavigationWrapper)`
    justify-content: space-between;
    margin-bottom: 0;
`;

const StatementText = styled.div`
    font-size: 16px;
    line-height: 28px;
    color: #8e9192;
    margin-bottom: 60px;

    span {
        color: #4fd8eb;
    }
`;

const TableWrapper = styled.div`
    padding: 12px 22px 5vw;
`;

const BlocksPage = ({ firstBalanceChange = '1', lastBalanceChange = '1', txs = '1', address = '1' }) => {
    const tableData = [
        {
            hash: '0x611a0e4ac70c63b9eed284213d8d2e70cc31029b',
            method: 'approve',
            block: '1345711',
            age: '6 days 10 hrs ago	',
            from: '0x23908928b70d0b638d0f7544528538c78a6',
            to: 'ENS: ENS Token',
            value: '1 Ether',
            'txn fee': '0.001913048528',
        },
    ];

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
                            Ethereum Account
                        </Headline>
                    </Row>

                    <Row>
                        <Col xs="12" md="3">
                            <AccountDetailsCard>
                                <div>First balance change</div>
                                <div>Received {firstBalanceChange} ago</div>
                                <div>Last balance change</div>
                                <div>Sent {lastBalanceChange} ago</div>
                                <div>Transaction count</div>
                                <div>{txs}</div>
                            </AccountDetailsCard>
                        </Col>
                        <Col xs="12" md="6">
                            <CurrencyDetailsCard>
                                <AddressBar address={address} />
                                <div>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 19.375C15.1777 19.375 19.375 15.1777 19.375 10C19.375 4.82233 15.1777 0.625 10 0.625C4.82233 0.625 0.625 4.82233 0.625 10C0.625 15.1777 4.82233 19.375 10 19.375Z"
                                            fill="#5092C5"
                                        />
                                        <path
                                            d="M12.8125 4.6875L10 7.5L7.1875 4.6875H5.3125V15.3125H7.1875V7.5L10 10.3125L12.8125 7.5V15.3125H14.6875V4.6875H12.8125Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <a href="/">View address on other chains</a>
                                </div>
                                <div className="flex">
                                    <span>Balance</span>
                                    <span>9.6196293683046072 ETH | 43,372.99 USD</span>
                                </div>
                                <div className="flex">
                                    <span>Ether Value</span>
                                    <span>43,590.06 (4,375.65/ETH) USD</span>
                                </div>
                                <div className="flex">
                                    <div>Tokens</div>
                                    <div style={{ width: '72%' }}>
                                        <select>
                                            <option>239,765.46 USD</option>
                                            <option>239,765.46 USD</option>
                                            <option>239,765.46 USD</option>
                                        </select>
                                    </div>
                                </div>
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

                <StatementText>
                    Latest 25 from a total of <span>3,688</span> transactions
                </StatementText>

                <TableWrapper>
                    <TransactionsTable data={tableData} />
                </TableWrapper>
            </Container>
        </Wrapper>
    );
};

export default BlocksPage;
