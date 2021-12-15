import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import LandingPage from '.';

const Wrapper = withThemeProvider((props: any) => {
    return <LandingPage {...props} />;
});

export default {
    title: 'Screens/LandingPage',
    component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});
