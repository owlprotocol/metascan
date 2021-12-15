import styled from 'styled-components';
import { ReactComponent as BTCIcon } from '../../icons/btc.svg';

const Wrapper = styled.div`
    background: #eaf4f4;
    border: 1px solid #d3d3d3;
    width: 315px;
    height: 176px;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 10px 14px rgb(0 0 0 / 10%), 0 6px 10px rgb(0 0 0 / 8%);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Footer = styled.div`
    color: #9d9c9c;
    font-weight: bold;
    font-size: 18px;
    margin-top: 26px;

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const TokenDetails = styled.div`
    flex: 1;

    > div:first-of-type {
        font-weight: bold;
        font-size: 20px;
        color: #000;
    }

    > div:last-of-type {
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 0.2px;
        color: #655e5e;
        /* margin: 6px 0; */
    }
`;

const ChangePercent = styled.div`
    color: #2fd82b;
    font-weight: bold;
    font-size: 20px;
    margin-right: 7px;
`;

const IconWrapper = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 18px;
`;

const TokenCard = ({ token, price, change, blocks, txs }: any) => {
    return (
        <Wrapper>
            <Header>
                <IconWrapper>
                    <BTCIcon />
                </IconWrapper>

                {(token || price || change) && (
                    <>
                        <TokenDetails>
                            <div>{token}</div>
                            <div>{price}</div>
                        </TokenDetails>
                        <ChangePercent>{change}</ChangePercent>
                    </>
                )}
            </Header>

            {(blocks || txs) && (
                <Footer>
                    <div>
                        Blocks <span>{blocks}</span>
                    </div>
                    <div>
                        Transactions <span>{txs}</span>
                    </div>
                </Footer>
            )}
        </Wrapper>
    );
};

export default TokenCard;
