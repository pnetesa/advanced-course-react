import { type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  function toggleLanguage(): void {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  }

  return (
    <Button
      type="button"
      className={classNames('', [className])}
      theme={ButtonTheme.OUTLINE}
      onClick={toggleLanguage}
    >
      { short ? t('lang-short') : t('lang-long') }
    </Button>
  );
};
