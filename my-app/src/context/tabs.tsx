import { createContext, ReactNode, useMemo, useState } from 'react';
import { Tab, TabsContextType } from '../types/tabs';

export const TabsContext = createContext<TabsContextType>({});

interface TabsProviderProps {
  children: ReactNode;
}

export const TabsProvider = ({ children }: TabsProviderProps) => {
  const [tab, setTab] = useState<Tab>('form');

  const providerValue: TabsContextType = useMemo(
    () => ({
      tab,
      setTab,
    }),
    [tab]
  );

  return <TabsContext.Provider value={providerValue}>{children}</TabsContext.Provider>;
};
