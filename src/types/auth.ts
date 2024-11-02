export interface IAuthStore {
  user: IUser | null;
  headers: THeaders | null;

  logout: () => void;
  setUser: (user: IUser) => void;
  setHeaders: (header: THeaders) => void;
}

export type THeaders = {
  key: string;
  secret: string;
};

export type TSignUpFormValues = {
  name: string;
  email: string;
  key: string;
  secret: string;
};

export interface IUser extends TSignUpFormValues {
  id: number;
}
