import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '../button/Button';
import { ButtonWithIcon } from '../button/ButtonWithIcon';
import copyIcon from './../../assets/icons/copy-icon.svg';
import horizontalLogo from './../../assets/icons/horizontal-logo.png';
import { formatAddress } from '../../utils/formatAddress';

export const Navigation = () => {
    const address = '0xfA2bAC4b80DeAA1594Cd29A920367E4c038c7620';
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-8 py-2 bg-black-500">
            <div className="w-full flex flex-wrap items-center justify-between">
                <div>
                    <img
                        className="w-[24rem] pl-8"
                        src={horizontalLogo}
                        alt="logo"
                    ></img>
                </div>

                <div className="flex items-center justify-end">
                    <Button disabled={true} text="3600 LAKE | 1.2 ETH"></Button>
                    <div className="ml-6">
                        <ButtonWithIcon
                            disabled={true}
                            text={formatAddress(address)}
                        >
                            <CopyToClipboard text={address}>
                                <button>
                                    <img src={copyIcon} alt="copy"></img>
                                </button>
                            </CopyToClipboard>
                        </ButtonWithIcon>
                    </div>
                </div>
            </div>
        </nav>
    );
};
