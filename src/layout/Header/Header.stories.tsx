import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import Header from './';

const Wrapper = withThemeProvider((props: any) => {
    return <Header {...props} />;
});

export default {
    title: 'Layout/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});
