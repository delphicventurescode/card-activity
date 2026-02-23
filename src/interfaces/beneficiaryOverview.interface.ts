import { BigNumber } from 'ethers';

export interface IBeneficiaryOverview {
    name: string;
    terms: BigNumber;
    cliff: BigNumber;
    duration: BigNumber;
    allocatedAmount: BigNumber;
    withdrawnAmount: BigNumber;
}
