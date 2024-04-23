import { memo, useContext } from 'react';
import { TABS } from '../../consts/tabs';
import { TabsContext } from '../../context/tabs';
import { Tab } from '../../types/tabs';
import { Button } from '../button';
import s from './tabs.module.scss';

export const Tabs = memo(() => {
  const { setTab } = useContext(TabsContext);

  const handleClick = (tab: Tab) => () => setTab?.(tab);

  return (
    <div className={s.tabs}>
      {TABS.map((tab) => (
        <Button onClick={handleClick(tab)} key={tab}>
          {tab}
        </Button>
      ))}
    </div>
  );
});

Tabs.displayName = 'Tabs';
