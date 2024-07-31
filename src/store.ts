import { User } from '@src/types/user';
import { atom } from 'recoil';

const signedIn = atom({
  key: 'signedIn',
  default: true,
});

const currentUser = atom<User | undefined>({
  key: 'currentUser',
  default: undefined,
});

export { currentUser, signedIn };
