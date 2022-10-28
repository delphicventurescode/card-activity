import { useConfig } from '../hooks/use-config';

const { lakeTgeTimestamp } = useConfig();

export const getUnlockedAmount = (
    cliff: number,
    terms: number,
    vestingRate: number,
) => {
    return (
        Math.floor(
            (new Date().getTime() / 1000 - lakeTgeTimestamp - cliff) / terms,
        ) * vestingRate
    );
};
