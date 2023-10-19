import { type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './PageLoader.module.scss';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.pageLoader, [className])}>
      <Loader />
      <div>{t('Loading...')}</div>
    </div>
  );
};
