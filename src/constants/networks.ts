const infuraId = import.meta.env.VITE_INFURA_ID;

export const networks = {
    mainnet: {
        name: 'mainnet',
        chainId: 1,
        chainIdAsHex: '0x1',
        rpcUrl: `https://mainnet.infura.io/v3/${infuraId}`,
    },
    goerli: {
        name: 'goerli',
        chainId: 5,
        chainIdAsHex: '0x5',
        rpcUrl: `https://goerli.infura.io/v3/${infuraId}`,
    },
};
