import { ComponentStory, ComponentMeta } from '@storybook/react';
import { actionsCreateNetwork } from '../../test/data';
import { networkIdArgType, addressArgType } from '../../test/storybookArgs';

import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { AccountInfoRow, AccountInfoRowProps } from './AccountInfoRow';

const Wrapper = withThemeProvider(withStoreProvider(withMockData(AccountInfoRow, actionsCreateNetwork)));
const Template: ComponentStory<typeof AccountInfoRow> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});
const Args: AccountInfoRowProps = {
    networkId: networkIdArgType.options[0],
    address: addressArgType.options[0],
};
Main.args = Args;
Main.argTypes = {
    networkId: networkIdArgType,
    address: addressArgType,
};

export default {
    title: 'Account/AccountInfoRow',
    component: AccountInfoRow,
} as ComponentMeta<typeof AccountInfoRow>;
