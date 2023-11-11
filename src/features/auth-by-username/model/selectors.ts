import { type StateSchema } from 'app/providers/store-provider';
import { type LoginSchema } from './types';

export const getLoginState = (state: StateSchema): LoginSchema => state.loginForm;
