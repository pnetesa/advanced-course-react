import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from './types';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { loginReducer } from 'features/auth-by-username';

export function createReduxStore(initialState?: StateSchema): ReturnType<typeof configureStore> {
  const reducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: reducers,
    devTools: _IS_DEV,
    preloadedState: initialState,
  });
};
