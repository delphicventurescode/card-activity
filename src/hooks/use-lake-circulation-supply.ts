import axios from 'axios';
import { useConfig } from './use-config';

export const useLakeCirculationSupply = async (
    blockTag?: number,
): Promise<number> => {
    try {
        const { lakeApiUrl } = useConfig();
        const instance = axios.create({
            baseURL: lakeApiUrl,
        });
        const resp = await instance.get(
            `/supply/circulation/${blockTag ? blockTag : ''}`,
        );
        return resp.data.circulationSupply;
    } catch (e) {
        console.error('Failed to get LAKE circulation supply: ', e);
        return 0;
    }
};
