import { type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.navbar, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>{t('Main')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('About')}</AppLink>
      </div>
    </div>
  );
};
