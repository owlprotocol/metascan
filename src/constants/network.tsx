export enum ChainId {
    TESTNET = '4243',
    LOCAL = '1337',
}

export const NETWORKS = {
    [ChainId.TESTNET]: {
        ID: ChainId.TESTNET,
        RPC: 'https://api.oyun.one/ethereum/poa/http',
        WSS: 'wss://api.oyun.one/ethereum/poa/ws',
    },
    [ChainId.LOCAL]: {
        ID: ChainId.LOCAL,
        RPC: 'http://localhost:8545',
        WSS: 'ws://localhost:8545',
    },
};
