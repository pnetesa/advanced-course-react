import './styles/index.scss';
import { useTheme } from './providers/theme-provider';
import { classNames } from 'shared/lib/class-names';
import { AppRouter } from 'app/providers/routing';
import { Navbar } from 'widgets/navbar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <AppRouter/>
    </div>
  );
};

export default App;
