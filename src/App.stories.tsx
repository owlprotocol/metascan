import { ComponentStory, ComponentMeta } from '@storybook/react';
import App from './App';

const MainTemplate: ComponentStory<typeof App> = (args) => <App {...args} />;
export const Main = MainTemplate.bind({});
const MainArgs: any = {};
Main.args = MainArgs;

//Default export
export default {
    title: 'App/App',
    component: Main,
} as ComponentMeta<typeof App>;
