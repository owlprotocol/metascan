import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withThemeProvider } from '../../hoc';
import TokenPriceCard, { Props } from '.';

const Wrapper = withThemeProvider((props: Props) => {
    return <TokenPriceCard {...props} />;
});

export default {
    title: 'Generic/TokenPriceCard',
    component: TokenPriceCard,
} as ComponentMeta<typeof TokenPriceCard>;

const Template: ComponentStory<typeof TokenPriceCard> = (args: any) => <Wrapper {...args} />;

export const Main = Template.bind({});

Main.args = {
    token: 'ETH',
    price: '4,256.86',
    change: '-1.2',
    chartData: [
        { name: 'ETH', price: 700 },
        { name: 'ETH', price: 200 },
        { name: 'ETH', price: 1100 },
        { name: 'ETH', price: 400 },
        { name: 'ETH', price: 3200 },
        { name: 'ETH', price: 1200 },
    ],
};
