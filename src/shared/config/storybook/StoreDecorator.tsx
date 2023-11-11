import { type StoryFn } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/store-provider';
import { type DeepPartial } from '@reduxjs/toolkit';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: StoryFn): JSX.Element => (
  <StoreProvider initialState={initialState}>
    <StoryComponent/>
  </StoreProvider>
);
