import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.primary};
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
`;

const Footer = () => (
    <Wrapper>
        <div>Metascan | Oyun Labs 2021</div>
    </Wrapper>
);

export default Footer;
