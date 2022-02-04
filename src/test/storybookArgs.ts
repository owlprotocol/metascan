export const networkIdArgType = {
    options: ['1'],
    control: { type: 'select' },
};

const ADDRESS_0 = '0x0000000000000000000000000000000000000000';
const WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const addressLabels = {
    [ADDRESS_0]: `ZERO - ${ADDRESS_0}`,
    [WETH]: `WETH - ${WETH}`,
};
export const addressArgType = {
    options: Object.keys(addressLabels),
    control: {
        type: 'select',
        labels: addressLabels,
    },
};

export const routeHashArgType = {
    options: ['#transactions', '#code'],
    control: { type: 'select' },
};
