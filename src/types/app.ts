import { ReactNode } from 'react';
import { Action, Location, BrowserHistory } from 'history';
import { RouterProps } from 'react-router-dom';
import { PaletteMode, TextFieldProps } from '@mui/material';
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

import { TBook } from './books';

export interface IAppStore {
  mode: PaletteMode;
  search: string;
  action: Action;
  isDrawer: boolean;
  location: Location;
  bookItem: TBook | null;
  addedBooks: string[];

  setMode: (mode: PaletteMode) => void;
  setSearch: (search: string) => void;
  setHistory: ({ action, location }: THistory) => void;
  toggleBook: (isbn: string) => void;
  setBookItem: (bookItem: TBook | null) => void;
  toggleDrawer: () => void;
}

type THistory = {
  action: Action;
  location: Location;
};

export type TRouterProps = {
  history: BrowserHistory;
} & Partial<RouterProps>;

export type TWithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export interface FieldProps<T extends FieldValues>
  extends Omit<TextFieldProps, 'error'> {
  register: UseFormRegister<T>;
  name: Path<T>;
  error?: FieldError;
}
export type TTitleProps = {
  title: string;
  children?: ReactNode;
};

export type TBooksProps = {
  item: TBook;
  children: ReactNode;
};
