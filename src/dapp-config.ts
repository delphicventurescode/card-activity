import { Mainnet, Goerli } from '@usedapp/core';

export const dappConfig = {
    autoConnect: false,
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
        [Mainnet.chainId]: `https://eth-mainnet.g.alchemy.com/v2/${
            import.meta.env.VITE_ALCHEMY_ETHEREUM_KEY
        }`,
        [Goerli.chainId]: `https://eth-goerli.g.alchemy.com/v2/${
            import.meta.env.VITE_ALCHEMY_GOERLI_KEY
        }`,
    },
};
