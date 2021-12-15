import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Content = styled.div`
    background: #fff;
    min-height: 80vh;
`;

const LayoutWrapper = ({ children }: any) => (
    <>
        <Header />
        <Content>{children}</Content>
        <Footer />
    </>
);

export default LayoutWrapper;
export { Header, Footer };
