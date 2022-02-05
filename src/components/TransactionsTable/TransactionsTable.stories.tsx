import { ComponentStory, ComponentMeta } from '@storybook/react';
import { networkIdArgType, addressArgType } from '../../test/storybookArgs';
import { actionsCreateNetwork } from '../../test/data';
import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { TransactionsTable, Props } from '.';

const Wrapper = withThemeProvider(withStoreProvider(withMockData(TransactionsTable, actionsCreateNetwork)));
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
