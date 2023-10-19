import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/error-boundary';

const MainPage = (): JSX.Element => {
  const { t } = useTranslation('main-page');

  return (
    <div>
      <BugButton/>
      {t('MAIN PAGE')}
    </div>
  );
};

export default MainPage;
