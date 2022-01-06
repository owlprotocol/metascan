import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import AccountPage from '.';

const Wrapper = withThemeProvider((props: any) => {
    return <AccountPage {...props} />;
});

export default {
    title: 'Screens/AccountPage',
    component: AccountPage,
} as ComponentMeta<typeof AccountPage>;

const Template: ComponentStory<typeof AccountPage> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

Main.args = {
    firstBalanceChange: '3 months',
    lastBalanceChange: '1 day',
    txs: '3,742',
    address: '0x63CD72389dc25DaF9A5c5016a4a6487d7471Ce73',
};
