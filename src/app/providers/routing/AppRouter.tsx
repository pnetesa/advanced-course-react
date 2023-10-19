import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './route-config';
import { PageLoader } from 'widgets/page-loader/PageLoader';

export const AppRouter = (): JSX.Element => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        { Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <div className="page-wrapper">
                {element}
              </div>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
