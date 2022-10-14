import { useContext, useEffect, useState } from 'react';
import { ASSET_LAKE } from '../constants/assets';
import { USDC_LAKE_POOL_ADDRESS } from '../constants/blockchain';
import { LakeStatsContext } from '../context';
import { EtherscanService } from '../services/etherscan-service';
import { parseBigNumber } from '../utils/parseBigNumber';
import { useUniswap } from './use-uniswap';

export type LakeStatsState = {
    marketCup: number;
    prevMarketCup: number;
    circulationSupply: number;
    prevCirculationSupply: number;
    lakePrice: number;
    prevLakePrice: number;
    consentsGathered: number;
    prevConsentsGathered: number;
};

const etherscanService = new EtherscanService();

export const useLakeStats = () => {
    const [currentTotalSupply, setCurrentTotalSupply] = useState(0);
    const [currentLakePrice, setCurrentLakePrice] = useState(0);
    const { marketCup, circulationSupply, lakePrice, consentsGathered } =
        useContext(LakeStatsContext);

    const { getLakePrice } = useUniswap();

    useEffect(() => {
        (async () => {
            const result = await etherscanService.getTotalSupply(
                ASSET_LAKE.address,
            );
            setCurrentTotalSupply(parseBigNumber(result, ASSET_LAKE.decimals));
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const result = await getLakePrice(USDC_LAKE_POOL_ADDRESS);
            setCurrentLakePrice(result);
        })();
    }, []);

    return {
        marketCup: currentTotalSupply * currentLakePrice,
        prevMarketCup: marketCup,
        circulationSupply: currentTotalSupply,
        prevCirculationSupply: circulationSupply,
        lakePrice: currentLakePrice,
        prevLakePrice: lakePrice,
        consentsGathered: 0,
        prevConsentsGathered: consentsGathered,
    };
};
