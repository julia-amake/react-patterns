import { createContext, ReactNode, useMemo, useState } from 'react';
import { User, UserContextType } from '../types/user';

export const UserContext = createContext<UserContextType>({});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>();

  const providerValue: UserContextType = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>;
};
