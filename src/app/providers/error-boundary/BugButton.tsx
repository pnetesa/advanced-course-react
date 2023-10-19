import { type FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/button/Button';
import { useTranslation } from 'react-i18next';

// Only for testing ErrorBoundary
export const BugButton: FC = (): JSX.Element => {
  const [isError, setIsError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isError) {
      throw new Error('Error from Bug Button!');
    }
  }, [isError]);

  return (
    <Button
      onClick={() => {
        setIsError(true);
      }}
    >
      {t('Throw Error')}
    </Button>
  );
};
