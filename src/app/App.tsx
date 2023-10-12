import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { Suspense } from 'react';
import { useTheme } from './providers/theme-provider';
import { classNames } from '../shared/lib/class-names';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme} type="button">Toggle</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
