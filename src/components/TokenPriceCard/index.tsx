import { ResponsiveContainer, LineChart, Line } from 'recharts';
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
    padding: 12px 0;
`;

const RecommendedFeeText = styled.div`
    color: #5193c5;
    font-weight: bold;
    font-size: 15px;
`;

const Wrapper = styled.div``;

interface ChartProps {
    name?: string;
    price?: number;
}

export interface Props {
    token?: string;
    price?: string;
    change?: string;
    chartData?: ChartProps[];
}

const TokenPriceCard = ({ token, price, change, chartData = [] }: Props) => {
    return (
        <Wrapper>
            <Header>
                <span>{token} Price</span>
                <span>{price} USD</span>
                <span>{change}%</span>
            </Header>
            <GraphWrapper>
                <ResponsiveContainer width="100%" height={150}>
                    <LineChart height={150} data={chartData}>
                        <Line key="price" dot={false} dataKey="price" stroke="#ff7300" />
                    </LineChart>
                </ResponsiveContainer>
            </GraphWrapper>
            <RecommendedFeeText>Recommended transaction fee</RecommendedFeeText>
            <div>1 satoshi per byte</div>
        </Wrapper>
    );
};

export default TokenPriceCard;
