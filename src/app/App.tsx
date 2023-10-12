import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from './providers/theme-provider';
import { classNames } from '../shared/lib/class-names';
import { AppRouter } from 'app/providers/routing';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme} type="button">Toggle</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter/>
    </div>
  );
};

export default App;
