import { Suspense, useEffect } from 'react';
import { useTheme } from './providers/theme-provider';
import { classNames } from 'shared/lib/class-names';
import { AppRouter } from 'app/providers/routing';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { userActions } from 'entities/user';
import { useDispatch } from 'react-redux';

const App = (): JSX.Element => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback="">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
