import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ADDRESS_0 } from '@owlprotocol/web3-redux/test/data';
import { withThemeProvider } from '../../hoc';
import { TransactionRowPresenter, PresenterProps } from '.';

const Wrapper = withThemeProvider(TransactionRowPresenter);
const Template: ComponentStory<typeof TransactionRowPresenter> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});
const Args: PresenterProps = {
    hash: '0xaee8b67f9eaeb33ab8f6911a31342d15395894a064313e464d4e0d5fdd2d51ef',
    blockNumber: 1,
    from: ADDRESS_0,
    to: ADDRESS_0,
};
Main.args = Args;

export default {
    title: 'Transaction/TransactionRowPresenter',
    component: TransactionRowPresenter,
} as ComponentMeta<typeof TransactionRowPresenter>;
