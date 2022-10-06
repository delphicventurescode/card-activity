import { ButtonBase } from './ButtonBase';

interface Props {
    disabled: boolean;
    text: string;
}

export const Button = ({ disabled, text }: Props) => (
    <ButtonBase disabled={disabled}>
        <span className="color-gradient tracking-wider text-xl">{text}</span>
    </ButtonBase>
);
