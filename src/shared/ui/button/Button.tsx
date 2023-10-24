import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  NO_THEME = '',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme = ThemeButton.NO_THEME, children, ...otherProps } = props;
  return (
    <button
      type="button"
      className={classNames(cls.button, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
