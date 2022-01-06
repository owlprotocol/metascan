import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import TransactionsTable, { Props } from '.';

const Wrapper = withThemeProvider((props: Props) => {
    return <TransactionsTable {...props} />;
});

export default {
    title: 'Generic/TransactionsTable',
    component: TransactionsTable,
} as ComponentMeta<typeof TransactionsTable>;

const Template: ComponentStory<typeof TransactionsTable> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

Main.args = {
    data: [
        {
            hash: '0x611a0e4ac70c63b9eed284213d8d2e70cc31029b',
            method: 'approve',
            block: '1345711',
            age: '6 days 10 hrs ago	',
            from: '0x23908928b70d0b638d0f7544528538c78a6',
            to: 'ENS: ENS Token',
            value: '1 Ether',
            'txn fee': '0.001913048528',
        },
    ],
};
