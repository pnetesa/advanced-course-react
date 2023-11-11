import { type CounterSchema } from 'entities/counter/model/types';
import { type UserSchema } from 'entities/user';
import { type LoginSchema } from 'features/auth-by-username';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
}
