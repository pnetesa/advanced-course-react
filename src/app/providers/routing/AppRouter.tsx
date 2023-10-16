import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './route-config';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
