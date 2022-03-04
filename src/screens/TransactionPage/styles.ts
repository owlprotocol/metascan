import styled from 'styled-components';
import { MetascanCardWrapper, NavigationWrapper } from '../../styles/Common';

export const Wrapper = styled.div`
    padding-bottom: 10vw;

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

export const DetailsTitle = styled.div`
    font-size: 18px;
    line-height: 25px;
    color: rgba(112, 121, 123, 0.7);
`;

export const Navigation = styled(NavigationWrapper)`
    margin-bottom: 0;
`;

export const TxnDataWrapper = styled.div`
    padding: 12px 22px 5vw;

    a {
        text-decoration: none;
    }

    > div {
        border-radius: 12px;
        padding: 16px 18px;
        color: #70797b;
        margin-bottom: 6px;

        > div {
            display: flex;
        }

        > div:not(:last-of-type) {
            margin-bottom: 12px;
        }

        span {
            font-weight: 500;
            font-size: 20px;
            line-height: 25px;
        }

        .title {
            width: 100%;
            max-width: 350px;
            display: flex;
            align-items: center;

            svg {
                margin-right: 10px;
            }
        }

        .sm-text {
            font-weight: 400;
        }
    }

    > div:nth-child(odd) {
        background: #eaf4f4;
    }

    > div:nth-child(even) {
        background: #fafafa;
    }
`;

export const SeeMoreButton = styled.div`
    display: flex;
    align-items: center;
    color: #5092c5;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;

    svg {
        margin-left: 12px;
    }
`;

export const TxnStatusWrapper = styled.div`
    background: #cde7ec;
    border-radius: 12px;
    padding: 12px 20px;

    > div:last-of-type {
        display: flex;
        align-items: center;
        margin-top: 6px;

        svg {
            margin-right: 6px;
        }
    }

    .confirmed-text {
        color: #3f484a;
        font-weight: 500;
        font-size: 24px;
        line-height: 25px;
    }
`;
