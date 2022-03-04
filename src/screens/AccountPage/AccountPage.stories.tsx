import { ComponentStory, ComponentMeta } from '@storybook/react';
import { actionsCreateNetwork } from '../../test/data';
import { networkIdArgType, addressArgType } from '../../test/storybookArgs';
import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { AccountPage, Props } from '.';

const Wrapper = withThemeProvider(withStoreProvider(withMockData(AccountPage, actionsCreateNetwork)));
const Template: ComponentStory<typeof AccountPage> = (args: any) => <Wrapper {...args} />;
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
    title: 'Account/AccountPage',
    component: AccountPage,
} as ComponentMeta<typeof AccountPage>;
