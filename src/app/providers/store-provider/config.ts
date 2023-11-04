import { configureStore } from '@reduxjs/toolkit';
import { type StateSchema } from './types';
import { counterReducer } from 'entities/counter';

export function createReduxStore(initialState?: StateSchema): ReturnType<typeof configureStore> {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: _IS_DEV,
    preloadedState: initialState,
  });
};
