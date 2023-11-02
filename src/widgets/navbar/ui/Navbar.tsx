import { type FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './Navbar.module.scss';
import { Modal } from 'shared/ui/modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/Button';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prevState => !prevState);
  }, []);

  return (
    <div className={classNames(cls.navbar, [className])}>
      <Button theme={ButtonTheme.BACKGROUND} onClick={onToggleModal} className={cls.links}>
        {t('Login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa dolorem doloremque facere iste, labore laborum minima minus numquam placeat possimus quod quos tenetur totam voluptatem. Id quaerat quo sequi!
      </Modal>
    </div>
  );
};
