import { type FC } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, [className])}>
      <Input autofocus className={cls.input} placeholder={t('Username')} />
      <Input type="password" className={cls.input} placeholder={t('Password')} />
      <Button className={cls.loginBtn}>
        {t('Login')}
      </Button>
    </div>
  );
};
