import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/class-names';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/auth-by-username/model/login-slice';
import { getLoginState } from 'features/auth-by-username/model/selectors';
import { loginByUsername } from 'features/auth-by-username/model/services';
import { Text, TextTheme } from 'shared/ui/text/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(function LoginForm({ className }: LoginFormProps): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({
      username,
      password,
    }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.loginForm, [className])}>
      <Text title={t('Authorization form')} />
      {error && <Text text={t('Invalid login or password')} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        onChange={onChangeUsername}
        className={cls.input}
        placeholder={t('Username')}
        value={username}
      />
      <Input
        onChange={onChangePassword}
        type="password"
        className={cls.input}
        placeholder={t('Password')}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        className={cls.loginBtn}
        disabled={isLoading}
      >
        {t('Login')}
      </Button>
    </div>
  );
});
