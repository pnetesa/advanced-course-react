import { type StateSchema } from 'app/providers/store-provider';
import { type User } from 'entities/user';

export const getUserAuthData = (state: StateSchema): User | undefined => state.user?.authData;
