import { lazy } from 'react';

// export const AboutPageLazy = lazy(() => import('./AboutPage'));
export const AboutPageLazy = lazy(() =>
  new Promise((resolve) => {
    // TODO: FOR TEST ONLY!
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
  }));
