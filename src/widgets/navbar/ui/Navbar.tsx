import React, { FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/AppLink';
import { ThemeSwitcher } from 'widgets/theme-switcher';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>About</AppLink>
      </div>
    </div>
  );
};
