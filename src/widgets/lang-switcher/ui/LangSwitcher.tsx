import React, { FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  function toggleLanguage() {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  }

  return (
    <Button
      type="button"
      className={classNames(cls.langSwitcher, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
    >
      { t('Language: ') + i18n.language.toUpperCase()}
    </Button>
  );
};
