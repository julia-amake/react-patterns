import { Dispatch, SetStateAction } from 'react';

export interface User {
  name?: string;
  username: string;
  phone: string;
  website: string;
}

export interface UserContextType {
  user?: User;
  setUser?: Dispatch<SetStateAction<User | undefined>>;
}
