import { type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/Button';
import { Theme } from 'app/providers/theme-provider';
import { LS_THEME_KEY } from 'shared/const';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }): JSX.Element => {
  const { t } = useTranslation();
  const theme = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.LIGHT;

  return (
    <div className={classNames(cls.pageError, [className, theme])}>
      <p>{t('Unexpected error has occurred')}</p>
      <Button onClick={() => { location.reload(); }}>{t('Reload page')}</Button>
    </div>
  );
};
