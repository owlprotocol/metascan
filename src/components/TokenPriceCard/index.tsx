import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        color: #70797b;
    }

    span:nth-child(2) {
        font-weight: 400;
        font-size: 16px;
    }

    span:nth-child(3) {
        color: #ba1b1b;
        font-size: 18px;
    }
`;

const GraphWrapper = styled.div`
    border-bottom: 1px solid #70797b;
    margin-top: 12px;
    margin-bottom: 12px;
`;

const Wrapper = styled.div``;

const TokenPriceCard = () => (
    <Wrapper>
        <Header>
            <span>ETH Price</span>
            <span>4,256.86 USD</span>
            <span>-1.2%</span>
        </Header>
        <GraphWrapper />
        <div>Recommended transaction fee</div>
        <div>1 satoshi per byte</div>
    </Wrapper>
);

export default TokenPriceCard;
