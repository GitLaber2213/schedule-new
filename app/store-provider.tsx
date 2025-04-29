'use client';

import { Provider } from "react-redux";
import { store } from "@/app/redux/redux";

export default function StoreProvider({ children }: Readonly<{ children: React.ReactNode; }>) {
  return <Provider store={store}>{children}</Provider>;
}