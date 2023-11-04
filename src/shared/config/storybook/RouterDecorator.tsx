import 'app/styles/index.scss';
import { type StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/store-provider';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
global._IS_DEV = true;

export const RouterDecorator = (StoryComponent: StoryFn): JSX.Element => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <StoryComponent/>
      </BrowserRouter>
    </StoreProvider>
  );
};
