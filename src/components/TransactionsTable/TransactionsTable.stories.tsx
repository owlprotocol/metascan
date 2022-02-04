import { ComponentStory, ComponentMeta } from '@storybook/react';
import Web3 from 'web3';
import { Network } from '@owlprotocol/web3-redux';
import { MAINNET_RPC } from '@owlprotocol/web3-redux/environment';
import { networkIdArgType, addressArgType } from '../../test/storybookArgs';
import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { TransactionsTable, Props } from '.';

const network: Network.Network = { networkId: '1', web3: new Web3(MAINNET_RPC) };
const actions = [Network.create(network)];

const Wrapper = withThemeProvider(withStoreProvider(withMockData(TransactionsTable, actions)));
const Template: ComponentStory<typeof TransactionsTable> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});

const Args: Props = {
    networkId: networkIdArgType.options[0],
    address: addressArgType.options[0],
};
Main.args = Args;
Main.argTypes = {
    networkId: networkIdArgType,
    address: addressArgType,
};

export default {
    title: 'Transaction/TransactionsTable',
    component: TransactionsTable,
} as ComponentMeta<typeof TransactionsTable>;
