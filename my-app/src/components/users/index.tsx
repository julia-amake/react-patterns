import { memo, useContext } from 'react';
import { TabsContext } from '../../context/tabs';
import { useGetUsers } from '../../hooks/useGetUsers';
import { Button } from '../button';
import { MemberCard } from '../memberCard';

export const Users = memo(() => {
  const { tab } = useContext(TabsContext);
  const { users, getUsers } = useGetUsers();

  if (tab !== 'users' || !users.length) return null;

  return (
    <>
      {users.map((user) => (
        <MemberCard {...user} key={user.username} />
      ))}
      <Button label="нажми меня!" onClick={getUsers}>
        more users
      </Button>
    </>
  );
});

Users.displayName = 'Users';
