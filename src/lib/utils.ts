import { StoreApi, UseBoundStore } from 'zustand';
import { createBrowserHistory } from 'history';
import LZString from 'lz-string';

import { TWithSelectors } from '@/types/app';

export const history = createBrowserHistory();
export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  stores: S
) => {
  const store = stores as TWithSelectors<typeof stores>;

  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

export const storage = {
  getItem: (key: string) => {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(LZString.decompress(item) || '') : null;
  },
  setItem: (key: string, value: unknown): void => {
    const compressedValue = LZString.compress(JSON.stringify(value));
    localStorage.setItem(key, compressedValue);
  },
  removeItem: (key: string): void => localStorage.removeItem(key),
  clear: (): void => localStorage.clear(),
};
