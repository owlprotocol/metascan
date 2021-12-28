import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import TokenIcon, { Props } from '.';

const Wrapper = withThemeProvider((props: any) => {
    return <TokenIcon {...props} />;
});

export default {
    title: 'Generic/TokenIcon',
    component: TokenIcon,
} as ComponentMeta<typeof TokenIcon>;

const Template: ComponentStory<typeof TokenIcon> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

const args: Props = {
    tokenName: 'btc',
    size: 64,
};

Main.args = args;
