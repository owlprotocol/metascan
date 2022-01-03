import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import ContractCode from '.';

const Wrapper = withThemeProvider((props: any) => {
    return <ContractCode {...props} />;
});

export default {
    title: 'Generic/ContractCode',
    component: ContractCode,
} as ComponentMeta<typeof ContractCode>;

const Template: ComponentStory<typeof ContractCode> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

Main.args = {
    bytecode: '0xff01024812309098a6ef98a6f896b89fea69bf6ae0bf89',
};
