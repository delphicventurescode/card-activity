import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core';

import { ASSET_LAKE } from '../constants/assets';
import { JsonRpcProvider } from '@ethersproject/providers';
import WalletConnectProvider from '@walletconnect/web3-provider/dist/umd/index.min.js';
import Web3Modal from 'web3modal';
import { parseBigNumber } from '../utils/parseBigNumber';
import { useConfig } from './use-config';
import { useState } from 'react';

type InternalState = {
    loading: boolean;
    error?: string | null;
};

const initialState = {
    loading: false,
    error: null,
};

export type WalletConnectState = {
    loading: boolean;
    active: boolean;
    account: string | undefined;
    provider: any;
    ethBalance: number;
    tokenBalance: number;
    library: JsonRpcProvider | undefined;
    error: string | null;
    activateProvider: () => void;
    deactivate: () => void;
    activateBrowserWallet: () => void;
    switchNetwork: (chainId: number) => void;
};

export const useWalletConnect = () => {
    const [internalState, setInternalState] =
        useState<InternalState>(initialState);

    const [provider, setProvider] = useState();

    const {
        isLoading,
        active,
        account,
        library,
        error,
        activate,
        deactivate,
        activateBrowserWallet,
        switchNetwork,
    } = useEthers();

    const { chainIdAsHex, lakeAddress } = useConfig();

    const ethBalanceAsBigNumber = useEtherBalance(account);
    const tokenBalanceAsBigNumber = useTokenBalance(lakeAddress, account);

    const getWeb3Modal = () => {
        const providerOptions = {
            injected: {
                display: {
                    name: 'Metamask',
                    description: 'Connect with the provider in your Browser',
                },
                package: null,
            },
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    infuraId: `${import.meta.env.VITE_INFURA_ID}`,
                },
            },
        };
        const web3Modal = new Web3Modal({
            network: 'mainnet',
            cacheProvider: true,
            disableInjectedProvider: false,
            providerOptions,
        });

        return web3Modal;
    };

    const activateProvider = async () => {
        setInternalState({
            ...internalState,
            loading: true,
        });

        const web3Modal = getWeb3Modal();

        try {
            const provider = await web3Modal.connect();
            await activate(provider);
            setProvider(provider);

            provider.on('chainChanged', async (chainId: string) => {
                if (chainId !== chainIdAsHex) {
                    handleDeactivate();
                }
            });

            setInternalState({
                ...internalState,
                error: null,
                loading: false,
            });
        } catch (error: any) {
            setInternalState({
                ...internalState,
                error: error,
                loading: false,
            });
        }
    };

    const handleDeactivate = () => {
        setProvider(undefined);
        deactivate();
        getWeb3Modal().clearCachedProvider();
    };

    return {
        loading: internalState.loading || isLoading,
        active,
        account,
        provider,
        ethBalance: ethBalanceAsBigNumber
            ? parseBigNumber(ethBalanceAsBigNumber)
            : 0,
        tokenBalance: tokenBalanceAsBigNumber
            ? parseBigNumber(tokenBalanceAsBigNumber, ASSET_LAKE.decimals)
            : 0,
        library,
        error: internalState.error || error?.toString() || null,
        activateProvider,
        deactivate: handleDeactivate,
        activateBrowserWallet,
        switchNetwork,
    };
};
