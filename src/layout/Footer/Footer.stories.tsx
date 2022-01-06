import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import Footer from './';

const Wrapper = withThemeProvider((props: any) => {
    return <Footer {...props} />;
});

export default {
    title: 'Layout/Footer',
    component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});
