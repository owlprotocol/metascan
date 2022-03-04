import { fromWei, toBN, unitMap } from 'web3-utils';
import { invert } from 'lodash';
import { useERC20 } from '@owlprotocol/web3-redux/contract/hooks';

const reverseUnitMap = invert(unitMap);
export interface TokenDropDownOptionProps {
    networkId: string;
    tokenAddress: string;
    accountAddress: string;
}
export const TokenDropDownOption = ({ networkId, tokenAddress, accountAddress }: TokenDropDownOptionProps) => {
    const { symbol, balanceOf, decimals } = useERC20(networkId, tokenAddress, accountAddress);
    const decimalsBN = toBN('10').pow(toBN(decimals ?? '18'));
    const unit = reverseUnitMap[decimalsBN.toString()];
    const balanceOfEth = fromWei(balanceOf ?? '0', unit as any);
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
const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const TETHER = '0xdac17f958d2ee523a2206206994597c13d831ec7';
const CHAINLINK = '0x514910771af9ca656af840dff83e8264ecf986ca';
const defaultTokenList = [WETH, USDC, TETHER, CHAINLINK];

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
