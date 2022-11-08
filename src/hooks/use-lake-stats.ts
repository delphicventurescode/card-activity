import { ASSET_LAKE } from '../constants/assets';
import { EtherscanService } from '../services/etherscan-service';
import { JsonRpcProvider } from '@ethersproject/providers';
import { parseBigNumber } from '../utils/parseBigNumber';
import { useConfig } from './use-config';
import { useUniswap } from './use-uniswap';

const etherscanService = new EtherscanService();

export const useLakeStats = async (provider: JsonRpcProvider) => {
    const { getLakePrice } = useUniswap(provider);
    const { lakeAddress } = useConfig();
    const lakePrice = await getLakePrice();

    const circulationSupply = parseBigNumber(
        await etherscanService.getTotalSupply(lakeAddress),
        ASSET_LAKE.decimals,
    );

    return {
        marketCup: circulationSupply * lakePrice,
        circulationSupply,
        lakePrice,
        consentsGathered: 0,
    };
};
