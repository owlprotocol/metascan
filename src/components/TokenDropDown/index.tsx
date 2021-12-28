import web3 from 'web3';
import { useApp, useFetchAccountTokens } from '../../hooks';

export interface Props {
    tokenList?: [];
    accountAddr: string;
    networkId: string;
}

function TokenDropDown({ accountAddr, networkId }: Props) {
    useApp();
    const TokenList = useFetchAccountTokens(networkId, accountAddr);

    return (
        <div className="flex">
            <div>Tokens</div>
            <div style={{ width: '72%' }}>
                <select>
                    {TokenList.map((token) => (
                        <option key={token.address}>
                            {token.currAccBal ? web3.utils.fromWei(token.currAccBal) : '0'} {token.symbol}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default TokenDropDown;