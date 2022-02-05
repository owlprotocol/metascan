import { ComponentStory, ComponentMeta } from '@storybook/react';
import Web3 from 'web3';
import { Network } from '@owlprotocol/web3-redux';
import { MAINNET_RPC } from '@owlprotocol/web3-redux/environment';
import { transactionHashArgType } from '../../test/storybookArgs';

import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { TransactionInfoRow, TransactionInfoRowProps } from './TransactionInfoRow';

const network: Network.Network = { networkId: '1', web3: new Web3(MAINNET_RPC) };
const actions = [Network.create(network)];

const Wrapper = withThemeProvider(withStoreProvider(withMockData(TransactionInfoRow, actions)));
const Template: ComponentStory<typeof TransactionInfoRow> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});
const Args: TransactionInfoRowProps = {
    hash: transactionHashArgType.options[0],
};
Main.args = Args;
Main.argTypes = {
    hash: transactionHashArgType,
};

export default {
    title: 'Transaction/TransactionInfoRow',
    component: TransactionInfoRow,
} as ComponentMeta<typeof TransactionInfoRow>;
