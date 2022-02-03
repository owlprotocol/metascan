import { fromWei } from 'web3-utils';
import { useERC20 } from '@owlprotocol/web3-redux/contract/hooks';

export interface TokenDropDownOptionProps {
    networkId: string;
    tokenAddress: string;
    accountAddress: string;
}
export const TokenDropDownOption = ({ networkId, tokenAddress, accountAddress }: TokenDropDownOptionProps) => {
    const { symbol, balanceOf } = useERC20(networkId, tokenAddress, accountAddress);
    const balanceOfEth = balanceOf ? fromWei(balanceOf) : '0.0';
    return (
        <option key={tokenAddress}>
            {balanceOfEth} {symbol}
        </option>
    );
};

export interface Props {
    networkId: string;
    accountAddress: string;
    tokenAddressList?: string[];
}

const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
const defaultTokenList = [WETH];

export const TokenDropDown = ({ networkId, accountAddress, tokenAddressList = defaultTokenList }: Props) => {
    return (
        <div className="flex">
            <div>Tokens</div>
            <div style={{ width: '72%' }}>
                <select>
                    {tokenAddressList.map((tokenAddress) => (
                        <TokenDropDownOption
                            key={tokenAddress}
                            networkId={networkId}
                            accountAddress={accountAddress}
                            tokenAddress={tokenAddress}
                        />
                    ))}
                </select>
            </div>
        </div>
    );
};

export default TokenDropDown;
