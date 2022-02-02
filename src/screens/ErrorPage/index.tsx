import styled from 'styled-components';
import { SearchBar } from '../../components';
import { ETH } from '../../svg';

const Headline = styled.div`
    font-size: 36px;
    line-height: 20px;
    letter-spacing: 0.1px;
    margin-bottom: 60px;

    svg {
        margin-right: 13px;
    }
`;

const SearchBarWrapper = styled.div`
    max-width: 936px;
    margin: 0 auto;
    top: -25px;
    position: relative;
    z-index: 1;
`;

const Wrapper = styled.div``;

const ErrorPage = () => {
    return (
        <Wrapper>
            <SearchBarWrapper>
                <SearchBar />
            </SearchBarWrapper>
            <Headline>
                <ETH />
                Error - Invalid String
            </Headline>
        </Wrapper>
    );
};

export default ErrorPage;
