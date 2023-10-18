import { lazy } from 'react';

// export const MainPageLazy = lazy(() => import('./MainPage'));
export const MainPageLazy = lazy(async () =>
  await new Promise((resolve) => {
    // @ts-expect-error FOR TEST ONLY!
    setTimeout(() => { resolve(import('./MainPage')); }, 1500);
  }));
