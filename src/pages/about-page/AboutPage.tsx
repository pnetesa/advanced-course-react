import { useTranslation } from 'react-i18next';

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation('about-page');

  return (
    <div>
      {t('ABOUT PAGE')}
    </div>
  );
};

export default AboutPage;
