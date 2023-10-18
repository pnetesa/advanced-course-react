import { type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './AppLink.module.scss';
import { Link, type LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, theme = AppLinkTheme.PRIMARY, children, ...linkProps } = props;

  return (
    <Link className={classNames(cls.appLink, [className, cls[theme]])} {...linkProps}>
      {children}
    </Link>
  );
};
