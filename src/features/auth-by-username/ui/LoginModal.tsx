import { type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import { Modal } from 'shared/ui/modal/Modal';
import { LoginForm } from './LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }): JSX.Element => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames('', [className])}>
      <LoginForm />
    </Modal>
  );
};
