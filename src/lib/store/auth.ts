import { create } from 'zustand';

import { createSelectors } from '../utils';

import type { IAuthStore, IUser, THeaders } from '@/types/auth';
import { storage } from '@/lib/utils';
import { KEYS } from '@/constants';

const useAuth = create<IAuthStore>()((set) => ({
  user: storage.getItem(KEYS.user) as IUser,
  headers: storage.getItem(KEYS.headers) as THeaders,

  setHeaders: (headers) => set(() => ({ headers })),
  setUser: (user) =>
    set(() => {
      storage.setItem(KEYS.user, user);
      return { user };
    }),
  logout: () =>
    set(() => {
      storage.removeItem(KEYS.user);
      storage.removeItem(KEYS.headers);
      storage.removeItem(KEYS.list);

      return {
        user: null,
        headers: null,
      };
    }),
}));

export const useAuthStore = createSelectors(useAuth);
