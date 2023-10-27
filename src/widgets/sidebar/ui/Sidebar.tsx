import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/class-names';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/app-link/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'app/providers/routing/route-config';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  function onToggle(): void {
    setIsCollapsed(prevState => !prevState);
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, [className], { [cls.collapsed]: isCollapsed })}
    >
      <div className={cls.items}>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath[AppRoutes.MAIN]}
        >
          <MainIcon className={cls.icon}/>
          <span className={cls.link}>{t('Main')}</span>
        </AppLink>
        <AppLink
          className={cls.item}
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath[AppRoutes.ABOUT]}
        >
          <AboutIcon className={cls.icon}/>
          <span className={cls.link}>{t('About')}</span>
        </AppLink>
      </div>
      <Button
        onClick={onToggle}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.collapseBtn}
        data-testid="sidebar-toggle"
        size={ButtonSize.L}
        square
      >
        { isCollapsed ? '>>' : '<<' }
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={isCollapsed} className={cls.lang} />
      </div>
    </div>
  );
};
