import { ComponentStory, ComponentMeta } from '@storybook/react';
import { actionsCreateNetwork } from '../../test/data';
import { networkIdArgType, transactionHashArgType } from '../../test/storybookArgs';
import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { TransactionRow, Props } from '.';

const Wrapper = withThemeProvider(withStoreProvider(withMockData(TransactionRow, actionsCreateNetwork)));
const Template: ComponentStory<typeof TransactionRow> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});
const Args: Props = {
    networkId: networkIdArgType.options[0],
    hash: transactionHashArgType.options[0],
};
Main.args = Args;
Main.argTypes = {
    networkId: networkIdArgType,
    hash: transactionHashArgType,
};

export default {
    title: 'Transaction/TransactionRow',
    component: TransactionRow,
} as ComponentMeta<typeof TransactionRow>;
