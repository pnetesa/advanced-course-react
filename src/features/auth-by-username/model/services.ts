import { createAsyncThunk } from '@reduxjs/toolkit';
import { type User, userActions } from 'entities/user';
import { LS_USER_KEY } from 'shared/const';
import axios from 'axios';

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'users/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error('Empty response.data');
      }

      const user = response.data;

      // Save "token" (simulation)
      localStorage.setItem(LS_USER_KEY, JSON.stringify(user));

      thunkAPI.dispatch(userActions.setAuthData(user));
      return user;
    } catch (e) {
      return thunkAPI.rejectWithValue('USER NOT FOUND');
    }
  },
);
