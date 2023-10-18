import './styles/index.scss';
import { useTheme } from './providers/theme-provider';
import { classNames } from 'shared/lib/class-names';
import { AppRouter } from 'app/providers/routing';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { Suspense } from 'react';

const App = (): JSX.Element => {
  const { theme } = useTheme();

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
