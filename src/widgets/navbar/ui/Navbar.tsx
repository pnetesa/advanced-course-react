import { type FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/Button';
import { LoginModal } from 'features/auth-by-username';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/user';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (<div className={classNames(cls.navbar, [className])}>
      <Button theme={ButtonTheme.BACKGROUND} onClick={onLogout} className={cls.links}>
        {t('Logout')}
      </Button>
    </div>);
  }

  return (
    <div className={classNames(cls.navbar, [className])}>
      <Button theme={ButtonTheme.BACKGROUND} onClick={onShowModal} className={cls.links}>
        {t('Login')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
