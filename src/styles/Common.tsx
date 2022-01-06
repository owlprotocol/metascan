import styled from 'styled-components';

const MetascanCardWrapper = styled.div`
    background: #eaf4f4;
    min-width: 260px;
    border-radius: 12px;
    padding: 16px 18px;
    margin-bottom: 30px;
`;

const NavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    flex-wrap: wrap;
    margin-bottom: 30px;

    a {
        color: #70797b;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.2px;
        margin: 10px 12px;
        text-decoration: none;
        border-radius: 50px;
        padding: 6px 22px;
        transition: 300ms;
        text-transform: capitalize;

        &:hover {
            background: #2090f960;
            color: #000;
        }
    }
`;

export { MetascanCardWrapper, NavigationWrapper };
