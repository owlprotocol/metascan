import styled from 'styled-components';
import { MetascanCardWrapper, NavigationWrapper } from '../../styles/Common';

export const Wrapper = styled.div`
    .container {
        padding: 40px 0;
        margin: 0 auto;
    }
`;

export const Headline = styled.div`
    font-size: 36px;
    line-height: 20px;
    letter-spacing: 0.1px;
    margin-bottom: 60px;

    svg {
        margin-right: 13px;
    }
`;

export const SearchBarWrapper = styled.div`
    max-width: 936px;
    margin: 0 auto;
    top: -25px;
    position: relative;
    z-index: 1;
`;

export const HeroWrapper = styled.div`
    background: #fafafa;
    min-height: 580px;
`;

export const AccountDetailsCard = styled(MetascanCardWrapper)`
    > div:not(:last-of-type) {
        margin-bottom: 12px;
    }

    > div:nth-child(odd) {
        color: rgb(112 121 123 / 55%);
        font-size: 18px;
        line-height: 25px;
    }

    > div:nth-child(even) {
        color: #70797b;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;

        a {
            float: right;
            color: #5092c5;
            text-decoration: none;
            font-size: 16px;
        }
    }
`;

export const CurrencyDetailsCard = styled(MetascanCardWrapper)`
    > div {
        color: #70797b;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
    }

    > div:not(:last-of-type) {
        margin-bottom: 12px;
    }

    a {
        color: #5092c5;
        text-decoration: none;
        font-size: 16px;
        margin-left: 8px;
    }

    span:first-of-type {
        width: 150px;
    }

    span:last-of-type {
        flex: 1;
        text-align: left;
    }
`;

export const Navigation = styled(NavigationWrapper)``;

export const StatementText = styled.div`
    font-size: 16px;
    line-height: 28px;
    color: #8e9192;
    margin-bottom: 60px;

    span {
        color: #4fd8eb;
    }
`;

export const TableWrapper = styled.div`
    padding: 12px 22px 5vw;
`;
