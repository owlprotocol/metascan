import { ComponentStory, ComponentMeta } from '@storybook/react';
import Web3 from 'web3';
import { Network } from '@owlprotocol/web3-redux';
import { MAINNET_RPC } from '@owlprotocol/web3-redux/environment';
import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { TransactionRow, Props } from '.';

const network: Network.Network = { networkId: '1', web3: new Web3(MAINNET_RPC) };
const actions = [Network.create(network)];

const Wrapper = withThemeProvider(withStoreProvider(withMockData(TransactionRow, actions)));
const Template: ComponentStory<typeof TransactionRow> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});
const Args: Props = {
    networkId: '1',
    hash: '0xaee8b67f9eaeb33ab8f6911a31342d15395894a064313e464d4e0d5fdd2d51ef',
};
Main.args = Args;

export default {
    title: 'Transaction/TransactionRow',
    component: TransactionRow,
} as ComponentMeta<typeof TransactionRow>;
