// @ts-nocheck
import { ComponentType, /*useEffect,*/ useRef } from 'react';
import { useParams, NavLink, HashRouter, useLocation, withRouter, RouteComponentProps } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {
    SearchBar,
    AddressBar,
    TransactionsTable,
    TokenTxnsTable,
    TokenDropDown,
    ContractCode,
    EventLog,
} from '../../components';
import { fromWei } from 'web3-utils';
//import { Contract } from '@owlprotocol/web3-redux';
import { useNetworkCreate, /*useAccount,*/ useEthPrice } from '../../hooks';
import { DetailButton, ETH, Metascan } from '../../svg';
//import { ERC721 } from '../../hooks/useAccount';
import { internalTableData, ERC20Data, ERC721Data, tableData } from './stub';
import {
    Wrapper,
    HeroWrapper,
    SearchBarWrapper,
    Headline,
    AccountDetailsCard,
    CurrencyDetailsCard,
    Navigation,
    StatementText,
    TableWrapper,
} from './styles';

const NETWORK_ID = '1';
/*
interface optionTab {
    href: string;
    label: string;
}
*/

/*
interface IAccount {
    account: Contract.Contract;
    contract?: Contract.Contract;
    ERC721?: ERC721;
    optionTabs: optionTab[];
}
*/

const AccountPage = ({ firstBalanceChange = '1', lastBalanceChange = '1' }) => {
    //routing
    const refs = useRef<HTMLAnchorElement[]>([]);
    const defRef = useRef<HTMLAnchorElement>(null);
    const location = useLocation();

    //Web3 data fetching
    useNetworkCreate();
    const { accountAddr } = useParams<{ accountAddr: string }>();
    //const accountObj: IAccount | undefined = useAccount(NETWORK_ID, accountAddr as string);
    //const { account, contract, optionTabs } = accountObj;
    //Coinbase Api
    const ethPrice: number = useEthPrice();

    // selection handling
    /*
    useEffect(() => {
        if (defRef.current === null) return;
        //on each route change, set all route options except first one to white
        for (let i = 0; i < refs.current.length; i++) {
            deselect(refs.current[i]);
        }
        //if current hash route is a valid href (excluding first one)
        //set that as selected
        for (let i = 1; i < optionTabs.length; i++) {
            if ('#' + optionTabs[i].href === location.hash) {
                deselect(defRef.current);
                select(refs.current[i - 1]);
                return;
            }
        }
        //otherwise, set the first route options as selected
        //defRef = default reference
        select(defRef.current);
    });
    */

    const account = {};

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
                            Ethereum Account
                        </Headline>
                    </Row>
                    {account ? (
                        <Row>
                            <Col xs="12" md="3">
                                <AccountDetailsCard>
                                    <div>First balance change</div>
                                    <div>Received {firstBalanceChange} ago</div>
                                    <div>Last balance change</div>
                                    <div>Sent {lastBalanceChange} ago</div>
                                    <div>Transaction count</div>
                                    <div>{account?.nonce ? account.nonce : '0'}</div>
                                </AccountDetailsCard>
                            </Col>
                            <Col xs="12" md="6">
                                <CurrencyDetailsCard>
                                    <AddressBar
                                        address={accountAddr}
                                        title={contract?.isContract === true ? 'Contract' : 'Address'}
                                        hasQR
                                    />
                                    <div>
                                        <Metascan />
                                        <a href="/">View address on other chains</a>
                                    </div>
                                    <div className="flex">
                                        <span>Balance</span>
                                        <span>{account?.balance ? fromWei(account.balance) : '0'} ETH</span>
                                    </div>
                                    <div className="flex">
                                        <span>Ether Value</span>
                                        <span>
                                            {account?.balance
                                                ? (parseFloat(fromWei(account.balance)) * ethPrice).toFixed(2)
                                                : '0'}{' '}
                                            USD {`(${Math.round(ethPrice * 100) / 100}/ETH)`}
                                        </span>
                                    </div>
                                    <TokenDropDown accountAddr={accountAddr as string} networkId={NETWORK_ID} />
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
                    )}
                </Container>
            </HeroWrapper>

            {account && optionTabs?.length !== 0 && (
                <Container>
                    <Navigation>
                        <NavLink ref={defRef} exact to={location.pathname}>
                            {optionTabs[0].label}
                        </NavLink>
                        {optionTabs?.slice(1, optionTabs?.length).map((link, i) => {
                            return (
                                <HashRouter hashType="noslash" key={link.label}>
                                    <NavLink
                                        ref={(e: HTMLAnchorElement) => {
                                            if (refs.current.length < optionTabs?.length - 1) {
                                                refs.current[i] ? (refs.current[i] = e) : refs.current.push(e);
                                            }
                                        }}
                                        exact
                                        to={link.href}
                                    >
                                        {link.label}
                                    </NavLink>
                                </HashRouter>
                            );
                        })}
                        <button>
                            <DetailButton />
                        </button>
                    </Navigation>

                    <StatementText>
                        Latest 25 from a total of <span>3,688</span> transactions
                    </StatementText>

                    <TableWrapper>
                        {{
                            '#internaltx': <TransactionsTable data={internalTableData} internal={true} />,
                            '#tokentxns': <TokenTxnsTable data={ERC20Data} ERC721={false} />,
                            '#tokentxnsErc721': <TokenTxnsTable data={ERC721Data} ERC721={true} />,
                            '#code': <ContractCode bytecode={contract?.bytecode} />,
                            '#events': <EventLog accountAddr={accountAddr}></EventLog>,
                            '#comments': <div>comments</div>,
                        }[location.hash] || <TransactionsTable data={tableData} internal={false} />}
                    </TableWrapper>
                </Container>
            )}
        </Wrapper>
    );
};

export default withRouter(AccountPage as ComponentType<RouteComponentProps>);

/*
const select = (ref: HTMLAnchorElement) => {
    ref.style.backgroundColor = '#2090f960';
    ref.style.color = 'black';
};

const deselect = (ref: HTMLAnchorElement) => {
    ref.style.backgroundColor = 'white';
    ref.style.color = '#70797b';
};
*/
