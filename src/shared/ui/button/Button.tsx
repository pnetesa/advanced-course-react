import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  NO_THEME = '',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.NO_THEME,
    square,
    size = ButtonSize.M,
    children,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: Boolean(square),
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, [className, cls[theme], cls[size]], mods)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
