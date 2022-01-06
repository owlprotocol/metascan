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
