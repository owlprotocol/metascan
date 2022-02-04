import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ADDRESS_0 } from '@owlprotocol/web3-redux/test/data';
import Web3 from 'web3';
import { Network } from '@owlprotocol/web3-redux';
import { MAINNET_RPC } from '@owlprotocol/web3-redux/environment';
import { withThemeProvider, withStoreProvider, withMockData, withRouteHashAsProp } from '../../hoc';
import { AccountDataTable } from './AccountDataTable';

const network: Network.Network = { networkId: '1', web3: new Web3(MAINNET_RPC) };
const actions = [Network.create(network)];

const Wrapper = withThemeProvider(withStoreProvider(withMockData(withRouteHashAsProp(AccountDataTable), actions)));
const Template: ComponentStory<typeof AccountDataTable> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});
const Args: any = {
    networkId: '1',
    address: ADDRESS_0,
    txHashList: [],
    hash: '#transactions',
};
Main.args = Args;
Main.argTypes = {
    hash: {
        options: ['#transactions', '#code'],
        control: { type: 'select' },
    },
};

export default {
    title: 'Account/AccountDataTable',
    component: AccountDataTable,
} as ComponentMeta<typeof AccountDataTable>;
