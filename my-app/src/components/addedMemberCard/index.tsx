import React, { useContext } from 'react';
import { UserContext } from '../../context/user';
import { MemberCard } from '../memberCard';

export function AddedMemberCard() {
  const { user } = useContext(UserContext);

  if (!user) return null;

  return <MemberCard {...user} />;
}
