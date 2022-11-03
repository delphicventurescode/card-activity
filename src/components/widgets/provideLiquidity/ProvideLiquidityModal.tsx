import ReactModal from 'react-modal';

type Props = {
    isOpen: boolean;
    closeModal: () => void;
};

const customStyles = {
    overlay: {
        background: 'rgba(0, 0, 0, 0.4)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

ReactModal.setAppElement('#root');

export const ProvideLiquidityModal = ({ isOpen, closeModal }: Props) => {
    return (
        <ReactModal
            isOpen={isOpen}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="flex flex-col">
                <div className="flex justify-end">
                    <button onClick={closeModal}>close</button>
                </div>
                <div className="flex flex-col">
                    <div>PROVIDE LIQUIDITY</div>
                    <div className="flex flex-col">
                        <div>USDT</div>
                        <div>LAKE</div>
                    </div>
                    <div className="flex flex-col">
                        <div>APPROVE</div>
                        <div>PROVIDE LIQUIDITY</div>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
};
