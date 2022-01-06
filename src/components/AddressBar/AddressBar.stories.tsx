import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import SearchBar from '.';

const Wrapper = withThemeProvider((props: any) => {
    return <SearchBar {...props} />;
});

export default {
    title: 'Generic/SearchBar',
    component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

Main.args = {
    address: '0x63CD72389dc25DaF9A5c5016a4a6487d7471Ce73',
};
