import { type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  function toggleLanguage(): void {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  }

  return (
    <Button
      type="button"
      className={classNames('', [className])}
      theme={ThemeButton.OUTLINE}
      onClick={toggleLanguage}
    >
      { t('Language: ') + i18n?.language?.toUpperCase()}
    </Button>
  );
};
