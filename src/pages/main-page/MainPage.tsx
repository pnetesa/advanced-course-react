import { useTranslation } from 'react-i18next';

const MainPage = (): JSX.Element => {
  const { t } = useTranslation('main-page');

  return (
    <div>
      {t('MAIN PAGE')}
    </div>
  );
};

export default MainPage;
