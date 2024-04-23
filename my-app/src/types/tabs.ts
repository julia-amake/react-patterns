import { Dispatch, SetStateAction } from 'react';
import { TABS } from '../consts/tabs';

export type Tab = (typeof TABS)[number];

export interface TabsContextType {
  tab?: Tab;
  setTab?: Dispatch<SetStateAction<Tab>>;
}
