import { memo } from 'react';
import { User } from '../../../types/user';
import s from './cardInfo.module.scss';

type CardInfoProps = Pick<User, 'phone' | 'username' | 'website'>;

export const CardInfo = memo(({ phone, username, website }: CardInfoProps) => {
  return (
    <div className={s.info}>
      <p className={s.item}>Username: {username}</p>
      <p className={s.item}>Phone: {phone}</p>
      <p className={s.item}>Website: {website}</p>
    </div>
  );
});

CardInfo.displayName = 'CardInfo';
