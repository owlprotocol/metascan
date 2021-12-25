import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import TokenTxnsTable, { Props } from '.';

const Wrapper = withThemeProvider((props: Props) => {
    return <TokenTxnsTable {...props} />;
});

export default {
    title: 'Generic/TokenTxnsTable',
    component: TokenTxnsTable,
} as ComponentMeta<typeof TokenTxnsTable>;

const Template: ComponentStory<typeof TokenTxnsTable> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

Main.args = {
    data: [
        {
            hash: '0x611a0e4ac70c63b9eed284213d8d2e70cc31029b',
            age: '6 days 10 hrs ago	',
            from: '0x23908928b70d0b638d0f7544528538c78a6',
            to: 'ENS: ENS Token',
            value: '1 Ether',
            token: 'SOS',
        },
    ],
};
