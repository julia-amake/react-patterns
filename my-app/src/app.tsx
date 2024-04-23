import React from 'react';
import { AddedMemberCard } from './components/addedMemberCard';
import { Form } from './components/form';
import { Tabs } from './components/tabs';
import { Users } from './components/users';
import { TabsProvider } from './context/tabs';
import { UserProvider } from './context/user';
import s from './styles/app.module.scss';

export const App = () => {
  return (
    <div className={s.app}>
      <UserProvider>
        <TabsProvider>
          <Tabs />
          <Users />
          <Form />
        </TabsProvider>
        <AddedMemberCard />
      </UserProvider>
    </div>
  );
};
