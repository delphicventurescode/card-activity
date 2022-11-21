import { PriceRange } from './PriceRange';
import { colors } from '../../../../constants/colors';
import styled from 'styled-components';

type Props = {
    isRangeVisible: boolean;
    tickLower?: number;
    tickUpper?: number;
    nearestTick?: number;
    tickSpacing?: number;
    slippageTolerance: number;
    transactionDeadline: number;
    decreaseTickLower?: () => void;
    increaseTickLower?: () => void;
    decreaseTickUpper?: () => void;
    increaseTickUpper?: () => void;
    onSlippageToleranceChange: (event: any) => void;
    onTransactionDeadlineChange: (event: any) => void;
    onFullRangeClick?: () => void;
};

export const Settings = ({
    isRangeVisible,
    tickLower,
    nearestTick,
    tickSpacing,
    tickUpper,
    slippageTolerance,
    transactionDeadline,
    decreaseTickLower,
    increaseTickLower,
    decreaseTickUpper,
    increaseTickUpper,
    onSlippageToleranceChange,
    onTransactionDeadlineChange,
    onFullRangeClick,
}: Props) => {
    return (
        <SettingsContainer className="w-full flex flex-col p-4 my-4 font-kanit-medium whitespace-nowrap text-xs">
            {isRangeVisible && (
                <PriceRange
                    tickLower={tickLower!}
                    tickUpper={tickUpper!}
                    nearestTick={nearestTick!}
                    tickSpacing={tickSpacing!}
                    decreaseTickLower={decreaseTickLower!}
                    increaseTickLower={increaseTickLower!}
                    decreaseTickUpper={decreaseTickUpper!}
                    increaseTickUpper={increaseTickUpper!}
                    onFullRangeClick={onFullRangeClick!}
                />
            )}
            <div className="flex w-full justify-between">
                <div className="tracking-[.12em] flex items-center">
                    SLIPPAGE TOLERANCE:
                </div>
                <div className="flex w-[5rem]">
                    <input
                        className="color-gradient text-base font-bold truncate text-end w-full"
                        value={slippageTolerance}
                        onChange={onSlippageToleranceChange}
                    />
                    <div className="tracking-[.12em] ml-2 flex items-center">
                        %
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-between">
                <div className="tracking-[.12em] flex items-center">
                    TRANSACTION DEADLINE:
                </div>
                <div className="flex w-[5rem]">
                    <input
                        className="color-gradient text-base font-bold truncate text-end w-full"
                        value={transactionDeadline}
                        onChange={onTransactionDeadlineChange}
                    />
                    <div className="tracking-[.12em] ml-2 flex items-center">
                        MIN
                    </div>
                </div>
            </div>
        </SettingsContainer>
    );
};

const SettingsContainer = styled.div`
    box-shadow: inset 1px 1px 1px rgba(68, 68, 68, 0.05),
        inset -1px -1px 4px rgba(134, 134, 134, 0.12);
    border-radius: 20px;
    background: ${colors.black[600]};
`;
