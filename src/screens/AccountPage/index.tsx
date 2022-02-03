/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentType, /*useEffect,*/ useRef } from 'react';
import { useParams, NavLink, HashRouter, useLocation, withRouter, RouteComponentProps } from 'react-router-dom';
import { Container } from 'reactstrap';
import composeHooks from 'react-hooks-compose';

import { SearchBar, TransactionsTable, TokenTxnsTable, ContractCode, EventLog } from '../../components';
import { useNetworkCreate, /*useAccount,*/ useEthPrice } from '../../hooks';
import { DetailButton } from '../../svg';
import { Wrapper, HeroWrapper, SearchBarWrapper, Navigation, TableWrapper } from './styles';
import { AccountInfoRow } from './AccountInfoRow';

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

export interface Props {
    networkId?: string;
    address: string;
}
export const useAccountPage = () => {
    const ethPrice = useEthPrice();
    const { networkId, address } = useParams<{ networkId: string; address: string }>();
    const { hash } = useLocation();

    return { ethPrice, networkId: networkId ?? '1', address, locationHash: hash };
};

export interface PresenterProps {
    networkId: string;
    address: string;
    locationHash: string;
    txHashList: string[];
}
export const AccountPagePresenter = ({ networkId, address, txHashList }: PresenterProps) => {
    //routing
    const refs = useRef<HTMLAnchorElement[]>([]);
    const defRef = useRef<HTMLAnchorElement>(null);
    const location = useLocation();

    //Web3 data fetching

    //const accountObj: IAccount | undefined = useAccount(NETWORK_ID, accountAddr as string);
    //const { account, contract, optionTabs } = accountObj;
    //Coinbase Api
    //const ethPrice: number = useEthPrice();

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

    return (
        <Wrapper>
            <HeroWrapper>
                <SearchBarWrapper>
                    <SearchBar />
                </SearchBarWrapper>
                <Container>
                    <AccountInfoRow networkId={networkId} address={address} />
                    {/*
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

                    */}

                    {/*
                        <StatementText>
                            Latest 25 from a total of <span>3,688</span> transactions
                        </StatementText>
    */}
                    <TableWrapper>
                        {/*{
                                '#internaltx': <TransactionsTable data={internalTableData} internal={true} />,
                                '#tokentxns': <TokenTxnsTable data={ERC20Data} ERC721={false} />,
                                '#tokentxnsErc721': <TokenTxnsTable data={ERC721Data} ERC721={true} />,
                                '#code': <ContractCode bytecode={contract?.bytecode} />,
                                '#events': <EventLog accountAddr={accountAddr}></EventLog>,
                                '#comments': <div>comments</div>,
                            }[location.hash] */}

                        <TransactionsTable networkId={networkId} hashList={txHashList ?? []} />
                    </TableWrapper>
                </Container>
            </HeroWrapper>
        </Wrapper>
    );
};

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

export const AccountPage = composeHooks(() => ({
    useAccountPage: () => useAccountPage(),
}))(AccountPagePresenter) as () => JSX.Element;

export default AccountPage;
