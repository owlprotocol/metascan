/* eslint-disable @typescript-eslint/no-unused-vars */
import { /*useEffect,*/ useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import composeHooks from 'react-hooks-compose';

import { SearchBar, TransactionsTable } from '../../components';
import { /*useAccount,*/ useEthPrice } from '../../hooks';
import { Wrapper, HeroWrapper, SearchBarWrapper, TableWrapper } from './styles';
import { AccountInfoRow } from './AccountInfoRow';
import { AccountDataTable } from './AccountDataTable';

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

    return { ethPrice, networkId: networkId ?? '1', address, locationHash: hash ?? '#transactions' };
};

export interface PresenterProps {
    networkId: string;
    address: string;
    locationHash: string;
    txHashList: string[];
}
export const AccountPagePresenter = ({ networkId, address, txHashList, locationHash }: PresenterProps) => {
    return (
        <Wrapper>
            <HeroWrapper>
                <SearchBarWrapper>
                    <SearchBar />
                </SearchBarWrapper>
                <Container>
                    <AccountInfoRow networkId={networkId} address={address} />
                    <AccountDataTable
                        networkId={networkId}
                        address={address}
                        txHashList={txHashList}
                        table={locationHash}
                    />
                </Container>
            </HeroWrapper>
        </Wrapper>
    );
};

export const AccountPage = composeHooks(() => ({
    useAccountPage: () => useAccountPage(),
}))(AccountPagePresenter) as () => JSX.Element;

export default AccountPage;
