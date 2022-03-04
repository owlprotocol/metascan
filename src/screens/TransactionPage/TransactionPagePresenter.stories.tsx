import { ComponentStory, ComponentMeta } from '@storybook/react';
import { transactionHashArgType } from '../../test/storybookArgs';
import { withThemeProvider } from '../../hoc';
import { TransactionPagePresenter, PresenterProps } from '.';
import { ADDRESS_0 } from '../../test/data';

const Wrapper = withThemeProvider(TransactionPagePresenter);

const Template: ComponentStory<typeof TransactionPagePresenter> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

const Args: PresenterProps = {
    hash: transactionHashArgType.options[0],
    value: '1',
    gasPrice: '1',
    gasUsed: 20000,
    blockNumber: 1,
    from: ADDRESS_0,
    to: ADDRESS_0,
    timeStamp: 0,
    ethPrice: 1,
};
Main.args = Args;
Main.argTypes = {
    hash: transactionHashArgType,
};

export default {
    title: 'Transaction/TransactionPagePresenter',
    component: TransactionPagePresenter,
} as ComponentMeta<typeof TransactionPagePresenter>;
