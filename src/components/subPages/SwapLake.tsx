import { SwapCustomWidget } from '../widgets/swap/SwapCustomWidget';

export const SwapLake = () => {
    return (
        <div className="w-full h-[80vh] flex m-auto">
            <div className="w-full flex flex-col items-center bg-black-600 rounded-[16px] m-auto box-shadow">
                <div className="font-kanit-medium color-gray-gradient text-shadow text-xl tracking-[.12em] mt-4">
                    SWAP $LAKE
                </div>
                <SwapCustomWidget />
            </div>
        </div>
    );
};
