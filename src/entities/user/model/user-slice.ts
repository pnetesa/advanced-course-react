import { createSlice } from '@reduxjs/toolkit';
import { type UserSchema } from './types';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
