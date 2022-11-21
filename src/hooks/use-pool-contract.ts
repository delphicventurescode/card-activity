import { Contract } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';
import { uniswapV3PoolAbi } from '../abis/uniswapV3Pool';
import { useConfig } from './use-config';

export const usePoolContract = (provider: JsonRpcProvider) => {
    const { usdtLakePoolAddress } = useConfig();
    return new Contract(usdtLakePoolAddress, uniswapV3PoolAbi, provider);
};
