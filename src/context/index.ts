import { WalletConnectState } from '../hooks/use-wallet-connect';
import { createContext } from 'react';

export const WalletConnectContext = createContext<WalletConnectState>({
    loading: false,
    active: false,
    account: undefined,
    provider: undefined,
    ethBalance: 0,
    tokenBalance: 0,
    library: undefined,
    error: null,
    activateProvider: () => {},
    deactivate: () => {},
    activateBrowserWallet: () => {},
    switchNetwork: () => {},
});
