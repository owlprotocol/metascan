import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AbiItem, AbiType, StateMutabilityType } from 'web3-utils';
import { Contract } from '@leovigna/web3-redux';
import store from '../store/store';

const WETH_CONTR_ADDR = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
//USDC Contract uses delegate calls to allow upgradability
//This is the address which they're parent contract points to as of 12/27/21
const USDC_CONTR_ADDR = '0xB7277a6e95992041568D9391D09d0122023778A2';

const WETH_CONTR_ABI = [
    {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view' as StateMutabilityType,
        type: 'function' as AbiType,
    },
    {
        constant: false,
        inputs: [
            { name: 'guy', type: 'address' },
            { name: 'wad', type: 'uint256' },
        ],
        name: 'approve',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable' as StateMutabilityType,
        type: 'function' as AbiType,
    },
    {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view' as StateMutabilityType,
        type: 'function' as AbiType,
    },
    {
        constant: false,
        inputs: [
            { name: 'src', type: 'address' },
            { name: 'dst', type: 'address' },
            { name: 'wad', type: 'uint256' },
        ],
        name: 'transferFrom',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable' as StateMutabilityType,
        type: 'function' as AbiType,
    },
    {
        constant: false,
        inputs: [{ name: 'wad', type: 'uint256' }],
        name: 'withdraw',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable' as StateMutabilityType,
        type: 'function' as AbiType,
    },
    {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', type: 'uint8' }],
        payable: false,
        stateMutability: 'view' as StateMutabilityType,
        type: 'function' as AbiType,
    },
    {
        constant: true,
        inputs: [{ name: '', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view' as StateMutabilityType,
        type: 'function' as AbiType,
    },
    {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view' as StateMutabilityType,
        type: 'function' as AbiType,
    },
    {
        constant: false,
        inputs: [
            { name: 'dst', type: 'address' },
            { name: 'wad', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable' as StateMutabilityType,
        type: 'function' as AbiType,
    },
    {
        constant: false,
        inputs: [],
        name: 'deposit',
        outputs: [],
        payable: true,
        stateMutability: 'payable' as StateMutabilityType,
        type: 'function' as AbiType,
    },
    {
        constant: true,
        inputs: [
            { name: '', type: 'address' },
            { name: '', type: 'address' },
        ],
        name: 'allowance',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view' as StateMutabilityType,
        type: 'function' as AbiType,
    },
    { payable: true, stateMutability: 'payable' as StateMutabilityType, type: 'fallback' as AbiType },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: 'src', type: 'address' },
            { indexed: true, name: 'guy', type: 'address' },
            { indexed: false, name: 'wad', type: 'uint256' },
        ],
        name: 'Approval',
        type: 'event' as AbiType,
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: 'src', type: 'address' },
            { indexed: true, name: 'dst', type: 'address' },
            { indexed: false, name: 'wad', type: 'uint256' },
        ],
        name: 'Transfer',
        type: 'event' as AbiType,
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: 'dst', type: 'address' },
            { indexed: false, name: 'wad', type: 'uint256' },
        ],
        name: 'Deposit',
        type: 'event' as AbiType,
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: 'src', type: 'address' },
            { indexed: false, name: 'wad', type: 'uint256' },
        ],
        name: 'Withdrawal',
        type: 'event' as AbiType,
    },
];
const USDC_CONTR_ABI = [
    {
        inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view' as StateMutabilityType,
        type: 'function' as AbiType,
    },
];

interface TokenContract {
    symbol: string;
    address: string;
    abi: AbiItem[];
    currAccBal?: any;
}

const WETH_CONTR: TokenContract = { symbol: 'WETH', address: WETH_CONTR_ADDR, abi: WETH_CONTR_ABI };
const USDC_CONTR: TokenContract = { symbol: 'USDC', address: USDC_CONTR_ADDR, abi: USDC_CONTR_ABI };
let TokenList: TokenContract[] = [WETH_CONTR, USDC_CONTR];

export function useFetchAccountTokens(networkId: string, accountAddr: string) {
    const dispatch = useDispatch();
    TokenList = TokenList.map((contr) => {
        return {
            symbol: contr.symbol,
            address: contr.address,
            abi: contr.abi,
            currAccBal: Contract.selectContractCall(store.getState(), `${networkId}-${contr.address}`, 'balanceOf', {
                args: [accountAddr],
            }),
        };
    });

    useEffect(() => {
        const CONTR_CALL_ARGS = { method: 'balanceOf', args: [accountAddr] };
        for (let i = 0; i < TokenList.length; i++) {
            dispatch(Contract.create({ networkId, ...TokenList[i] }));
            dispatch(Contract.call({ networkId, address: TokenList[i].address, ...CONTR_CALL_ARGS }));
        }
    }, []);
    return TokenList;
}
