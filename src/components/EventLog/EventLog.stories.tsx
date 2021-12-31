import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import EventLog from '.';

const Wrapper = withThemeProvider((props: any) => {
    return <EventLog {...props} />;
});

export default {
    title: 'Generic/EventLog',
    component: EventLog,
} as ComponentMeta<typeof EventLog>;

const Template: ComponentStory<typeof EventLog> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

Main.args = {
    data: [],
};
