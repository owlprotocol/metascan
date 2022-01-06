import styled from 'styled-components';
import Icon from 'react-crypto-icons';

const Wrapper = styled.div`
    display: block;
`;

export interface Props {
    tokenName: string;
    size?: number;
}

const TokenIcon = ({ tokenName, size = 64 }: Props) => (
    <Wrapper>
        <Icon name={tokenName} size={size} />
    </Wrapper>
);

export default TokenIcon;
