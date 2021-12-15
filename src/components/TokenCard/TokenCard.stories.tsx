import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import TokenCard from '.';

const Wrapper = withThemeProvider((props: any) => {
    return <TokenCard {...props} />;
});

export default {
    title: 'Generic/TokenCard',
    component: TokenCard,
} as ComponentMeta<typeof TokenCard>;

const Template: ComponentStory<typeof TokenCard> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

Main.args = {
    token: 'Bitcoin',
    price: '$57,980',
    change: '+2%',
    blocks: '807,900',
    txs: '900,111,000',
};
