import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ADDRESS_0 } from '@owlprotocol/web3-redux/test/data';
import Web3 from 'web3';
import { Network } from '@owlprotocol/web3-redux';
import { MAINNET_RPC } from '@owlprotocol/web3-redux/environment';
import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { AccountInfoRow, AccountInfoRowProps } from './AccountInfoRow';

const network: Network.Network = { networkId: '1', web3: new Web3(MAINNET_RPC) };
const actions = [Network.create(network)];

const Wrapper = withThemeProvider(withStoreProvider(withMockData(AccountInfoRow, actions)));
const Template: ComponentStory<typeof AccountInfoRow> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});
const Args: AccountInfoRowProps = {
    networkId: '1',
    address: ADDRESS_0,
};
Main.args = Args;

export default {
    title: 'Account/AccountInfoRow',
    component: AccountInfoRow,
} as ComponentMeta<typeof AccountInfoRow>;