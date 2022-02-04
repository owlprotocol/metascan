import { NavLink, useLocation } from 'react-router-dom';
import { ContractCode, TransactionsTable } from '../../components';
//import { DetailButton } from '../../svg';
import { Navigation, TableWrapper } from './styles';

export interface AccountDataTableProps {
    networkId: string;
    address: string;
}

const isActiveStyle = {
    backgroundColor: '#2090f960',
    color: 'black',
};
export const AccountDataTable = ({ networkId, address }: AccountDataTableProps) => {
    const { hash } = useLocation();
    return (
        <>
            <Navigation>
                <NavLink isActive={() => hash === '#transactions'} to="#transactions" activeStyle={isActiveStyle}>
                    transactions
                </NavLink>
                <NavLink isActive={() => hash === '#code'} to="#code" activeStyle={isActiveStyle}>
                    code
                </NavLink>
                {/*
                <button>
                    <DetailButton />
                </button> */}
            </Navigation>

            {/*
            <StatementText>
                Latest 25 from a total of <span>3,688</span> transactions
            </StatementText>
            */}
            <TableWrapper>
                {
                    {
                        '#transactions': <TransactionsTable networkId={networkId} address={address} />,
                        '#code': <ContractCode networkId={networkId} address={address} />,
                        //'#internaltx': <TransactionsTable data={internalTableData} internal={true} />,
                        //'#tokentxns': <TokenTxnsTable data={ERC20Data} ERC721={false} />,
                        ///'#tokentxnsErc721': <TokenTxnsTable data={ERC721Data} ERC721={true} />,
                        //'#code': <ContractCode bytecode={contract?.bytecode} />,
                        //'#events': <EventLog accountAddr={accountAddr}></EventLog>,
                        //'#comments': <div>comments</div>,
                    }[hash]
                }
            </TableWrapper>
        </>
    );
};

/*
const select = (ref: HTMLAnchorElement) => {
    ref.style.backgroundColor = '#2090f960';
    ref.style.color = 'black';
};

const deselect = (ref: HTMLAnchorElement) => {
    ref.style.backgroundColor = 'white';
    ref.style.color = '#70797b';
};
*/
