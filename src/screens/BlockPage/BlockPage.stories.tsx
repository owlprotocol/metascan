import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import BlockPage from './';

const Wrapper = withThemeProvider((props) => {
    return <BlockPage {...props} />;
});

export default {
    title: 'Screens/BlockPage',
    component: BlockPage,
} as ComponentMeta<typeof BlockPage>;

const Template: ComponentStory<typeof BlockPage> = (args) => <Wrapper {...args} />;

export const Main = Template.bind({});
