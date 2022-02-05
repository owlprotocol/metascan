import { ComponentStory, ComponentMeta } from '@storybook/react';
import { actionsCreateNetwork } from '../../test/data';
import { networkIdArgType, addressArgType, locationHashArgType } from '../../test/storybookArgs';
import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { AccountDataTable, AccountDataTableProps } from './AccountDataTable';

const Wrapper = withThemeProvider(withStoreProvider(withMockData(AccountDataTable, actionsCreateNetwork)));
const Template: ComponentStory<typeof AccountDataTable> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});
const Args: AccountDataTableProps = {
    networkId: networkIdArgType.options[0],
    address: addressArgType.options[0],
    locationHash: locationHashArgType.options[0] as '#transactions',
};
Main.args = Args;
Main.argTypes = {
    networkId: networkIdArgType,
    address: addressArgType,
    locationHash: locationHashArgType,
};

export default {
    title: 'Account/AccountDataTable',
    component: AccountDataTable,
} as ComponentMeta<typeof AccountDataTable>;
