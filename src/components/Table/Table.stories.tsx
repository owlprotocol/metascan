import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import Table, { Props } from './';

const Wrapper = withThemeProvider((props: Props) => {
    return <Table {...props} />;
});

export default {
    title: 'Generic/Table',
    component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

Main.args = {
    data: [
        {
            block: '13769938',
            age: '1 min ago',
            txn: '209',
            uncles: '1',
            miner: '2 Miners',
            'gas used': '11,000',
            'gas limit': '30,000,000',
            'base fee': '56.2 Gwei',
        },
        {
            block: '13769937',
            age: '2 min ago',
            txn: '208',
            uncles: '1',
            miner: '1 Miner',
            'gas used': '10,500',
            'gas limit': '30,000,000',
            'base fee': '52.2 Gwei',
        },
    ],
};
