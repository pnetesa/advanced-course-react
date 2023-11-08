import { type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/modal/Modal';
import { LoginForm } from './LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }): JSX.Element => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.loginModal, [className])}>
      <LoginForm />
    </Modal>
  );
};
