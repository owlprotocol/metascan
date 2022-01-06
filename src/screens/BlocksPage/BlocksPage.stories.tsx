import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import BlocksPage from '.';

const Wrapper = withThemeProvider((props: any) => {
    return <BlocksPage {...props} />;
});

export default {
    title: 'Screens/BlocksPage',
    component: BlocksPage,
} as ComponentMeta<typeof BlocksPage>;

const Template: ComponentStory<typeof BlocksPage> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});
