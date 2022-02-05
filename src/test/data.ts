import Web3 from 'web3';
import { toWei } from 'web3-utils';
import { Network, Contract } from '@owlprotocol/web3-redux';
import { MAINNET_RPC } from '@owlprotocol/web3-redux/environment';

export const ADDRESS_0 = '0x0000000000000000000000000000000000000000';
export const WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
export const VULCAN_OCR = '0xD22c87Dc7a3F12dcBB75CEbDA2e96f6766AE114F';

export const network1: Network.Network = { networkId: '1', web3: new Web3(MAINNET_RPC) };
export const contract1: Contract.Contract = {
    networkId: '1',
    address: ADDRESS_0,
    balance: toWei('1'),
    nonce: 0,
};
export const contract2: Contract.Contract = {
    networkId: '1',
    address: WETH,
    balance: toWei('1'),
    nonce: 0,
};

export const actionsCreateNetwork = [Network.create(network1)];
export const actionsCreateContract = [Contract.create(contract1), Contract.create(contract2)];
export const actions = [...actionsCreateNetwork, ...actionsCreateContract];
