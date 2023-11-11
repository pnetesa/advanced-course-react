import 'app/styles/index.scss';
import { type StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/store-provider';

export const RouterDecorator = (StoryComponent: StoryFn): JSX.Element => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <StoryComponent/>
      </BrowserRouter>
    </StoreProvider>
  );
};
