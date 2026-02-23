import { SEC_PER_DAY } from '../constants/commons';

export const getTermsAsString = (terms: number): string => {
    return terms === SEC_PER_DAY / 24
        ? 'HOUR'
        : terms === SEC_PER_DAY
        ? 'DAY'
        : terms === SEC_PER_DAY * 7
        ? 'WEEK'
        : `${terms} SEC`;
};
