import { SEC_PER_DAY } from '../constants/commons';
import { useConfig } from '../hooks/use-config';

const { lakeTgeTimestamp } = useConfig();

export const getDurationProgress = (
    cliff: number,
    duration: number,
): number => {
    return (
        ((new Date().getTime() / 1000 - lakeTgeTimestamp) * 100) /
        (cliff + duration)
    );
};

export const getDurationLeft = (cliff: number, duration: number): number => {
    return (
        Math.floor(
            (lakeTgeTimestamp +
                cliff +
                duration -
                new Date().getTime() / 1000) /
                SEC_PER_DAY,
        ) + 1
    );
};

export const isVestingScheduleUnlocked = (cliff: number, duration: number) => {
    return lakeTgeTimestamp + cliff + duration < new Date().getTime() / 1000;
};
