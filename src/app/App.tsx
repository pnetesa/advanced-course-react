import './styles/index.scss';
import { useTheme } from './providers/theme-provider';
import { classNames } from 'shared/lib/class-names';
import { AppRouter } from 'app/providers/routing';
import { Navbar } from 'widgets/navbar';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <AppRouter/>
      <button onClick={toggleTheme} type="button">Toggle</button>
    </div>
  );
};

export default App;
