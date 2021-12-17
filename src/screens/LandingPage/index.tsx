import styled from 'styled-components';
import { SearchBar, TokenCard } from '../../components';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { ReactComponent as ArrowRightIcon } from '../../icons/arrowRight.svg';
import { NAV_LINKS, STUB_TOKEN_LIST } from '../../constants';
import { NavigationWrapper } from '../../styles/Common';

const HeroWrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    background: #fafafa;
    min-height: 700px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SmallTitle = styled.div`
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #737373;
    text-transform: uppercase;
`;

const Headline = styled.div`
    font-weight: 800;
    font-size: 50px;
    line-height: 70px;
    letter-spacing: 0.2px;
    color: #252b42;
    margin: 20px 0;

    span {
        background: linear-gradient(39.97deg, #00f3b9 0.79%, #2187ff 79.29%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const SubText = styled.div`
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: 0.2px;
    color: #737373;
`;

const SearchBarWrapper = styled.div`
    width: 100%;
    max-width: 930px;
    margin: 50px auto 0;
`;

const SectionWrapper = styled.div`
    margin: 20px auto 0;

    &:not(:last-of-type) {
        margin-bottom: 70px;
    }
`;

const SectionHeader = styled.div`
    font-weight: bold;
    letter-spacing: 0.2px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 850px;
    margin: 40px auto;

    span {
        font-size: 36px;
        line-height: 57px;
        color: #000000;
    }

    a {
        font-size: 18px;
        line-height: 28px;
        color: #2091f9;
        text-decoration: none;
    }
`;

const TokenListWrapper = styled.div`
    display: grid;
    /*  Note: FOR MOBILE USE
        grid-template-columns: repeat(1, 1fr);
    */
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 60px;
    justify-items: center;
    align-items: center;
    padding: 20px 0 60px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
`;

const Navigation = styled(NavigationWrapper)``;

const Wrapper = styled.div``;

const LandingPage = () => {
    return (
        <Wrapper>
            <HeroWrapper>
                <div>
                    <SmallTitle>metascan</SmallTitle>
                    <Headline>
                        Blockchain explorers <br />
                        <span>analytics and more</span>
                    </Headline>
                    <SubText>A universal EVM blockchain explorer</SubText>
                </div>

                <div>
                    <SearchBarWrapper>
                        <SearchBar />
                    </SearchBarWrapper>
                </div>
            </HeroWrapper>

            <Container fluid>
                <Navigation>
                    {NAV_LINKS.map((link, key) => (
                        <NavLink to={link.href} key={key}>
                            {link.label}
                        </NavLink>
                    ))}
                </Navigation>

                <Row>
                    <SectionWrapper>
                        <SectionHeader>
                            <span>Blockchains</span>
                            <NavLink to="/see-more">
                                See More &nbsp;&nbsp;
                                <ArrowRightIcon />
                            </NavLink>
                        </SectionHeader>

                        <TokenListWrapper>
                            {STUB_TOKEN_LIST.map((token, key) => (
                                <TokenCard {...token} key={key} />
                            ))}
                        </TokenListWrapper>
                    </SectionWrapper>
                </Row>

                <SectionWrapper>
                    <SectionHeader>
                        <span>Tokens</span>
                        <NavLink to="/see-more">
                            See More &nbsp;&nbsp;
                            <ArrowRightIcon />
                        </NavLink>
                    </SectionHeader>

                    <TokenListWrapper>
                        <TokenCard token="Ethereum" />
                        <TokenCard token="USDC" />
                        <TokenCard token="Solana" />
                    </TokenListWrapper>
                </SectionWrapper>
            </Container>
        </Wrapper>
    );
};

export default LandingPage;
