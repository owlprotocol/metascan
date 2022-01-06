import styled from 'styled-components';
import { SearchBar } from '../../components';

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
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M54.2522 36.0457C50.9119 49.4457 37.3355 57.5914 23.9547 54.251C10.5543 50.9107 2.40857 37.335 5.749 23.9543C9.08923 10.5543 22.6459 2.40857 36.0463 5.749C49.4272 9.0697 57.5926 22.6455 54.2522 36.0457Z"
                        fill="#2D7CFB"
                    />
                    <path
                        d="M41.9922 30.375L30.125 37.625L18.25 30.375L30.125 10L41.9922 30.375ZM30.125 39.9531L18.25 32.7031L30.125 50L42 32.7031L30.125 39.9531Z"
                        fill="#F5F5F5"
                    />
                </svg>
                Error - Invalid String
            </Headline>
        </Wrapper>
    );
};

export default ErrorPage;
