import { ComponentStory, ComponentMeta } from '@storybook/react';
import Web3 from 'web3';
import { Network } from '@owlprotocol/web3-redux';
import { MAINNET_RPC } from '@owlprotocol/web3-redux/environment';
import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { ContractCode, Props } from '.';

const network: Network.Network = { networkId: '1', web3: new Web3(MAINNET_RPC) };
const actions = [Network.create(network)];

const Wrapper = withThemeProvider(withStoreProvider(withMockData(ContractCode, actions)));
const Template: ComponentStory<typeof ContractCode> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});
const Args: Props = {
    networkId: '1',
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
};
Main.args = Args;

export default {
    title: 'Contract/ContractCode',
    component: ContractCode,
} as ComponentMeta<typeof ContractCode>;
