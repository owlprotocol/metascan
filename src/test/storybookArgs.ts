import { ADDRESS_0, WETH, VULCAN_OCR } from './data';

export const networkIdArgType = {
    options: ['1'],
    control: { type: 'select' },
};

const addressLabels = {
    [ADDRESS_0]: `ZERO - ${ADDRESS_0}`,
    [WETH]: `WETH - ${WETH}`,
    [VULCAN_OCR]: `VULCAN - ${VULCAN_OCR}`,
};
export const addressArgType = {
    options: Object.keys(addressLabels),
    control: {
        type: 'select',
        labels: addressLabels,
    },
};

export const locationHashArgType = {
    options: ['#transactions', '#code'],
    control: { type: 'select' },
};

export const transactionHashArgType = {
    options: ['0x54cd74ed523ba9757a9c521f75a9669709c55546f5c3302cd9f04604b1caa9ea'],
    control: { type: 'select' },
};
