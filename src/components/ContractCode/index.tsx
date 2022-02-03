import { useGetCode } from '@owlprotocol/web3-redux/contract/hooks';
import composeHooks from 'react-hooks-compose';
import { Title, Wrapper } from './styles';

export interface Props {
    networkId: string;
    address: string;
}
export const useContractCode = ({ networkId, address }: Props) => {
    const bytecode = useGetCode(networkId, address);
    return { bytecode };
};

export interface PresenterProps {
    bytecode: string;
}
export const ContractCodePresenter = ({ bytecode }: PresenterProps) => {
    return (
        <>
            <Title>Bytecode</Title>
            <Wrapper>{bytecode}</Wrapper>
        </>
    );
};

export const ContractCode = composeHooks((props: Props) => ({
    useContractCode: () => useContractCode(props),
}))(ContractCodePresenter) as (props: Props) => JSX.Element;

export default ContractCode;
