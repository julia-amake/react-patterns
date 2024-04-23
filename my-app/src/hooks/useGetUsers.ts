import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchUsers } from '../api/users';
import { User } from '../types/user';

interface UseGetUsersResult {
  users: User[];
  getUsers: () => void;
}

export const useGetUsers = (): UseGetUsersResult => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(() => {
    fetchUsers().then((res) => setUsers([...users, ...res]));
  }, [users]);

  useEffect(() => {
    if (users.length) return;
    getUsers();
  }, [getUsers, users.length]);

  return useMemo(() => ({ users, getUsers }), [getUsers, users]);
};
