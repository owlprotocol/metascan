import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.primary};
    height: ${(props: any) => props.height};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 44px 0 58px;
    color: #fff;

    nav {
        display: inline-block;

        a {
            display: inline-block;
            margin: 0 19px;
        }
    }

    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            color: #fff;
        }
    }
`;

const ButtonLink = styled(NavLink)`
    background: #008392;
    color: #fff;
    border-radius: 10px;
    margin: 0;
    margin-left: 12px;
    font-weight: bold;
    font-size: 18px;
    line-height: 66px;
    width: 130px;
    height: 66px;
    display: inline-block;
    text-align: center;
`;

const PrefsButton = styled.div`
    background-color: #627b7f;
    text-transform: uppercase;
    border-radius: 10px;
    width: 160px;
    height: 66px;
    line-height: 66px;
    display: inline-block;
    text-align: center;
    margin-left: 12px;

    span {
        margin: 0 17px;
    }
`;

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        // @ts-ignore
        <Wrapper className="layout-header" height={isHomePage ? '100px' : '150px'}>
            <div>{/* <NavLink to="/">Logo</NavLink> */}</div>
            <div>
                <nav>
                    <NavLink to="/Blockchains">Blockchains</NavLink>
                    <NavLink to="/Products">Products</NavLink>
                    <NavLink to="/Resources">Resources</NavLink>
                    <NavLink to="/More">More</NavLink>
                </nav>

                <PrefsButton>
                    <span>eng</span>
                    <span>usd</span>
                </PrefsButton>

                <ButtonLink to="/login">Login</ButtonLink>
            </div>
        </Wrapper>
    );
};

export default Header;
