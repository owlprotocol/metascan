import styled from 'styled-components';

const Title = styled.div`
    color: #70797b;
    font-weight: 500;
    font-size: 28px;
`;

const Wrapper = styled.div`
    border: lightgrey 1px solid;
    border-radius: 15px;
    height: 200px;
    padding: 5px 10px;
    word-wrap: break-word;
    overflow-y: scroll;
`;

const ContractCode = ({ bytecode }: any) => {
    return (
        <>
            <Title>Bytecode</Title>
            <Wrapper>{bytecode}</Wrapper>
        </>
    );
};

export default ContractCode;
