import { Contract } from 'ethers';
import { JsonRpcSigner } from '@ethersproject/providers';
import { useConfig } from './use-config';
import { vestingScheduleAbi } from '../abis/vestingSchedule';

export const useTokenClaim = () => {
    const { vestingScheduleAddress } = useConfig();
    const claimAllTokens = async (signer: JsonRpcSigner): Promise<void> => {
        const vestingScheduleContract = new Contract(
            vestingScheduleAddress,
            vestingScheduleAbi,
            signer,
        );
        const tx = await vestingScheduleContract.claimAllTokens();
        return await tx.wait();
    };

    return {
        claimAllTokens,
    };
};
