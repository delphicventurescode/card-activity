import { Contract } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';
import { stakingAbi } from '../abis/staking';
import { useConfig } from './use-config';

export const useStakeLPTokens = async (
    provider: JsonRpcProvider,
    account: string,
    amount: number,
): Promise<void> => {
    try {
        const { stakingAddress } = useConfig();
        const stakingContract = new Contract(
            stakingAddress,
            stakingAbi,
            provider.getSigner(account),
        );
        const tx = await stakingContract.stake(amount);
        return await tx.wait();
    } catch (e) {
        console.error('Failed to stake LP tokens', e);
    }
    return;
};
