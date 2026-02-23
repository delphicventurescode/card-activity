export const getIncentiveId = (
    rewardToken: string,
    pool: string,
    startTime: number,
    endTime: number,
    refundee: string,
) => JSON.stringify({ rewardToken, pool, startTime, endTime, refundee });
