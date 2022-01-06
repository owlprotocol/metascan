import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import CopyToClipboard from '.';

const Wrapper = withThemeProvider((props: any) => {
    return <CopyToClipboard {...props} />;
});

export default {
    title: 'Generic/CopyToClipboard',
    component: CopyToClipboard,
} as ComponentMeta<typeof CopyToClipboard>;

const Template: ComponentStory<typeof CopyToClipboard> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

Main.args = {
    text: 'OYUNLABS2021',
};
