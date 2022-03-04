import { ComponentStory, ComponentMeta } from '@storybook/react';
import { actionsCreateNetwork } from '../../test/data';
import { networkIdArgType, addressArgType } from '../../test/storybookArgs';
import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { AccountPagePresenter, PresenterProps as Props } from '.';

const Wrapper = withThemeProvider(withStoreProvider(withMockData(AccountPagePresenter, actionsCreateNetwork)));
const Template: ComponentStory<typeof AccountPagePresenter> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});
const Args: Props = {
    networkId: networkIdArgType.options[0],
    address: addressArgType.options[0],
    nonce: 1,
    balance: '1',
    ethPrice: 1,
};
Main.args = Args;
Main.argTypes = {
    networkId: networkIdArgType,
    address: addressArgType,
};

export default {
    title: 'Account/AccountPagePresenter',
    component: AccountPagePresenter,
} as ComponentMeta<typeof AccountPagePresenter>;
