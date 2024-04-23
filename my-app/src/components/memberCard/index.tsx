import { memo } from 'react';
import { User } from '../../types/user';
import { CardInfo } from './parts/cardInfo';
import s from './memberCard.module.scss';

export const MemberCard = memo(({ name, ...rest }: User) => {
  return (
    <div className={s.card}>
      <p className={s.title}>{name}</p>
      <CardInfo {...rest} />
    </div>
  );
});

MemberCard.displayName = 'MemberCard';
