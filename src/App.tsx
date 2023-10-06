import { Link, Route, Routes } from 'react-router-dom';
import './index.scss';
import { MainPageLazy } from './pages/main-page/MainPage.lazy';
import { AboutPageLazy } from './pages/about-page/AboutPage.lazy';
import { Suspense } from 'react';

const App = () => {
  return (
    <div className="app">
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
