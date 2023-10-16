import './styles/index.scss';
import { useTheme } from './providers/theme-provider';
import { classNames } from 'shared/lib/class-names';
import { AppRouter } from 'app/providers/routing';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter/>
      </div>
    </div>
  );
};

export default App;
