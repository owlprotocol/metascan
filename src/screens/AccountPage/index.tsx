import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import composeHooks from 'react-hooks-compose';

import { SearchBar } from '../../components';
import { useEthPrice } from '../../hooks';
import { Wrapper, HeroWrapper, SearchBarWrapper } from './styles';
import { AccountInfoRow } from './AccountInfoRow';
import { AccountDataTable } from './AccountDataTable';

export interface Props {
    networkId?: string;
    address: string;
}
export const useAccountPage = () => {
    const ethPrice = useEthPrice();
    const { networkId, address } = useParams<{ networkId: string; address: string }>();
    return { ethPrice, networkId: networkId ?? '1', address };
};

export interface PresenterProps {
    networkId: string;
    address: string;
    txHashList: string[];
}
export const AccountPagePresenter = ({ networkId, address, txHashList }: PresenterProps) => {
    return (
        <Wrapper>
            <HeroWrapper>
                <SearchBarWrapper>
                    <SearchBar />
                </SearchBarWrapper>
                <Container>
                    <AccountInfoRow networkId={networkId} address={address} />
                    <AccountDataTable networkId={networkId} address={address} txHashList={txHashList} />
                </Container>
            </HeroWrapper>
        </Wrapper>
    );
};

export const AccountPage = composeHooks(() => ({
    useAccountPage: () => useAccountPage(),
}))(AccountPagePresenter) as () => JSX.Element;

export default AccountPage;
