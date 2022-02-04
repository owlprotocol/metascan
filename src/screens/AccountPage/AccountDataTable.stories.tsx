import { ComponentStory, ComponentMeta } from '@storybook/react';
import Web3 from 'web3';
import { Network } from '@owlprotocol/web3-redux';
import { MAINNET_RPC } from '@owlprotocol/web3-redux/environment';
import { networkIdArgType, addressArgType, routeHashArgType } from '../../test/storybookArgs';
import { withThemeProvider, withStoreProvider, withMockData, withRouteHashAsProp } from '../../hoc';
import { AccountDataTable } from './AccountDataTable';

const network: Network.Network = { networkId: '1', web3: new Web3(MAINNET_RPC) };
const actions = [Network.create(network)];

const Wrapper = withThemeProvider(withStoreProvider(withMockData(withRouteHashAsProp(AccountDataTable), actions)));
const Template: ComponentStory<typeof AccountDataTable> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});
const Args = {
    networkId: networkIdArgType.options[0],
    address: addressArgType.options[0],
    hash: routeHashArgType.options[0],
};
Main.args = Args;
Main.argTypes = {
    networkId: networkIdArgType,
    address: addressArgType,
    hash: routeHashArgType,
};

export default {
    title: 'Account/AccountDataTable',
    component: AccountDataTable,
} as ComponentMeta<typeof AccountDataTable>;
