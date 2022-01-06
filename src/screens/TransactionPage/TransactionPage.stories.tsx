import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import TransactionPage from '.';

const Wrapper = withThemeProvider((props: any) => {
    return <TransactionPage {...props} />;
});

export default {
    title: 'Screens/TransactionPage',
    component: TransactionPage,
} as ComponentMeta<typeof TransactionPage>;

const Template: ComponentStory<typeof TransactionPage> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

Main.args = {
    txnAmount: '50.0 ETH | 0.50 USD',
    txnFee: '0.01 ETH | 10 USD',
};
