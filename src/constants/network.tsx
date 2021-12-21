export enum ChainId {
    TESTNET = '4243',
    LOCAL = '1337',
    INFURA = '1',
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
    [ChainId.INFURA]: {
        ID: ChainId.INFURA,
        RPC: 'https://mainnet.infura.io/v3/3ab30a79cc9d408faaea93332aa0c2e2',
        WSS: 'wss://mainnet.infura.io/ws/v3/3ab30a79cc9d408faaea93332aa0c2e2',
    },
};
