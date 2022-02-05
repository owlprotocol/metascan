import { useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import composeHooks from 'react-hooks-compose';
import { useGetNonce, useGetBalance } from '@owlprotocol/web3-redux/contract/hooks';

import { SearchBar } from '../../components';
import { useEthPrice } from '../../hooks';
import { Wrapper, HeroWrapper, SearchBarWrapper } from './styles';
import { AccountInfoRow } from './AccountInfoRow';
import { AccountDataTable } from './AccountDataTable';

export interface Props {
    networkId: string;
    address: string;
}
export const useAccountPage = ({ networkId, address }: Props): PresenterProps => {
    const ethPrice = useEthPrice();
    const nonce = useGetNonce(networkId, address);
    const balance = useGetBalance(networkId, address);
    const { hash } = useLocation();

    return { networkId, address, nonce, balance, ethPrice, locationHash: (hash as any) ?? '#transactions' };
};

export interface PresenterProps {
    networkId: string;
    address: string;
    nonce?: number;
    balance?: string;
    ethPrice?: number;
    isContract?: boolean;
    locationHash?: '#transactions' | '#code';
}
export const AccountPagePresenter = ({
    networkId,
    address,
    nonce = 0,
    balance = '0',
    ethPrice = 0,
    locationHash = '#transactions',
}: PresenterProps) => {
    return (
        <Wrapper>
            <HeroWrapper>
                <SearchBarWrapper>
                    <SearchBar />
                </SearchBarWrapper>
                <Container>
                    <AccountInfoRow
                        networkId={networkId}
                        address={address}
                        nonce={nonce}
                        balance={balance}
                        ethPrice={ethPrice}
                    />
                    <AccountDataTable networkId={networkId} address={address} locationHash={locationHash} />
                </Container>
            </HeroWrapper>
        </Wrapper>
    );
};

export const AccountPage = composeHooks((props: Props) => ({
    useAccountPage: () => useAccountPage(props),
}))(AccountPagePresenter) as () => JSX.Element;

export default AccountPage;
