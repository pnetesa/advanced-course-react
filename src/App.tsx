import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { MainPageLazy } from './pages/main-page/MainPage.lazy';
import { AboutPageLazy } from './pages/about-page/AboutPage.lazy';
import { Suspense } from 'react';
import { useTheme } from './theme/use-theme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme} type="button">Toggle</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageLazy/>}/>
          <Route path={'/about'} element={<AboutPageLazy/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
