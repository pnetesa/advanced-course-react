import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import { LangSwitcher } from 'widgets/lang-switcher';
import { Button } from 'shared/ui/button/Button';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function onToggle(): void {
    setIsCollapsed(prevState => !prevState);
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, [className], { [cls.collapsed]: isCollapsed })}
    >
      <Button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
        { isCollapsed ? '>>' : '<<' }
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
