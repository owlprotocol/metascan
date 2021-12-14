import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Wrapper = styled.div``;

const LayoutWrapper = ({ children }: any) => (
    <Wrapper>
        <Header />
        {children}
        <Footer />
    </Wrapper>
);

export default LayoutWrapper;
export { Header, Footer };
