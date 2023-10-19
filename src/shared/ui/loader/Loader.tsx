import { type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }): JSX.Element => {
  return (
    <div className={classNames(cls.loader, [className])}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
