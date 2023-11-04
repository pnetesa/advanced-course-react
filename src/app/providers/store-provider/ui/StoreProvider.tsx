import { type FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/store-provider/config';
import { type StateSchema } from 'app/providers/store-provider/types';
import { type DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = (props): JSX.Element => {
  const {
    children,
    initialState,
  } = props;

  const store = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
};
