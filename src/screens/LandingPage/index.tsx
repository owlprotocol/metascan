import { SearchBar, TokenCard } from '../../components';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { ReactComponent as ArrowRightIcon } from '../../icons/arrowRight.svg';
import { NAV_LINKS, STUB_TOKEN_LIST } from '../../constants';
import {
    Wrapper,
    HeroWrapper,
    SmallTitle,
    Headline,
    SubText,
    SearchBarWrapper,
    Navigation,
    SectionWrapper,
    SectionHeader,
    TokenListWrapper,
} from './styles';

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
                        <TokenCard token="eth" />
                        <TokenCard token="usdc" />
                        <TokenCard token="sol" />
                    </TokenListWrapper>
                </SectionWrapper>
            </Container>
        </Wrapper>
    );
};

export default LandingPage;
