import { create } from 'zustand';

import { createSelectors } from '../utils';

import type { IAppStore } from '@/types/app';
import { history, storage } from '@/lib/utils';
import { KEYS } from '@/constants';

const useAppBase = create<IAppStore>()((set) => ({
  mode: storage.getItem(KEYS.mode) || 'light',
  search: '',
  action: history.action,
  location: history.location,
  bookItem: null,
  isDrawer: false,
  addedBooks: JSON.parse(storage.getItem(KEYS.list)) || [],

  setMode: (mode) =>
    set(() => {
      storage.setItem(KEYS.mode, mode);
      return { mode };
    }),
  setSearch: (search) => set(() => ({ search })),
  setHistory: ({ action, location }) => set(() => ({ action, location })),
  setBookItem: (bookItem) => set(() => ({ bookItem })),
  toggleBook: (isbn) =>
    set((state) => {
      let updatedBooks;

      if (state.addedBooks.includes(isbn)) {
        updatedBooks = state.addedBooks.filter((book) => book !== isbn);
      } else {
        updatedBooks = [...state.addedBooks, isbn];
      }

      storage.setItem(KEYS.list, JSON.stringify(updatedBooks));

      return { addedBooks: updatedBooks };
    }),
  toggleDrawer: () => set((state) => ({ isDrawer: !state.isDrawer })),
}));

export const useAppStore = createSelectors(useAppBase);
