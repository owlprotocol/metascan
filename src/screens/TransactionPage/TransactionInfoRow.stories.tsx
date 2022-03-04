import { ComponentStory, ComponentMeta } from '@storybook/react';
import { transactionHashArgType } from '../../test/storybookArgs';
import { actionsCreateNetwork } from '../../test/data';

import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { TransactionInfoRow, TransactionInfoRowProps } from './TransactionInfoRow';

const Wrapper = withThemeProvider(withStoreProvider(withMockData(TransactionInfoRow, actionsCreateNetwork)));
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
