import { lazy } from 'react';

// export const AboutPageLazy = lazy(() => import('./AboutPage'));
export const AboutPageLazy = lazy(async () =>
  await new Promise((resolve) => {
    // @ts-expect-error FOR TEST ONLY!
    setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
  }));
