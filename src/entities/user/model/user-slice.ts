import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type User, type UserSchema } from './types';
import { LS_USER_KEY } from 'shared/const';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const userJson = localStorage.getItem(LS_USER_KEY);
      if (userJson) {
        state.authData = JSON.parse(userJson);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LS_USER_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
