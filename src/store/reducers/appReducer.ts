const defaultState = {
    currentNetworkId: '1',
};

const initialState = defaultState;

const appReducer = (state: any = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case 'APP_CHANGE_NETWORK': {
            const newState = { ...state, currentNetworkId: payload };
            return newState;
        }

        default:
            return state;
    }
};

export default appReducer;
