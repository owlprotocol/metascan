import { ComponentStory, ComponentMeta } from '@storybook/react';
import { actionsCreateNetwork } from '../../test/data';
import { networkIdArgType, addressArgType } from '../../test/storybookArgs';
import { withThemeProvider, withStoreProvider, withMockData } from '../../hoc';
import { TokenDropDown, Props } from '.';

const Wrapper = withThemeProvider(withStoreProvider(withMockData(TokenDropDown, actionsCreateNetwork)));
const Template: ComponentStory<typeof TokenDropDown> = (args: any) => <Wrapper {...args} />;
export const Main = Template.bind({});
const Args: Props = {
    networkId: networkIdArgType.options[0],
    accountAddress: addressArgType.options[0],
};
Main.args = Args;
Main.argTypes = {
    networkId: networkIdArgType,
    accountAddress: addressArgType,
};

export default {
    title: 'Token/TokenDropDown',
    component: TokenDropDown,
} as ComponentMeta<typeof TokenDropDown>;
