import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import TokenDropDown, { Props } from '.';

const Wrapper = withThemeProvider((props: Props) => {
    return <TokenDropDown {...props} />;
});

export default {
    title: 'Generic/TokenDropDown',
    component: TokenDropDown,
} as ComponentMeta<typeof TokenDropDown>;

const Template: ComponentStory<typeof TokenDropDown> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});
