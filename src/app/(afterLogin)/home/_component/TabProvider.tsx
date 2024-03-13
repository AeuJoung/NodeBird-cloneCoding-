"use client"
import Tab from "./Tab"
import PostForm from "./PostForm";
import Post from "@/app/(afterLogin)/_component/Post";
import {createContext, ReactNode, useState} from "react";

export const TabContext = createContext({
  tab: 'rec',
  setTab: (value: 'rec' | 'fol') => {},
});

type Props = { children: ReactNode };
export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState('rec');

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  )
}