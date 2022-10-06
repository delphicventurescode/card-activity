import { ReactNode } from 'react';
import { ButtonBase } from './ButtonBase';

interface Props {
    disabled: boolean;
    text: string;
    children: ReactNode;
}

export const ButtonWithIcon = ({ disabled, text, children }: Props) => (
    <ButtonBase disabled={disabled}>
        <div className="w-full flex justify-between">
            {children}
            <span className="color-gradient tracking-wider text-xl">
                {text}
            </span>
        </div>
    </ButtonBase>
);
