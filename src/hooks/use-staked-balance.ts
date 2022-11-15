import { ASSET_LP_TOKEN } from '../constants/assets';
import { Contract } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';
import { parseBigNumber } from '../utils/parseBigNumber';
import { stakingAbi } from '../abis/staking';
import { useConfig } from './use-config';

export const useStakedBalance = async (
    provider: JsonRpcProvider,
    account: string,
): Promise<number> => {
    try {
        const { stakingAddress } = useConfig();
        const stakingContract = new Contract(
            stakingAddress,
            stakingAbi,
            provider.getSigner(account),
        );
        const stakedBalanceAsBigNumber =
            await stakingContract.callStatic.stakedBalance(account);
        return parseBigNumber(stakedBalanceAsBigNumber, 0);
    } catch (e) {
        console.error('Failed to unstake LP tokens', e);
    }
    return 0;
};
