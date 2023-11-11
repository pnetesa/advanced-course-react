import { type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = (props): JSX.Element => {
  const { className, title, text, theme = TextTheme.PRIMARY } = props;
  return (
    <div className={classNames(cls.text, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
