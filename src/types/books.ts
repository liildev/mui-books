export type TListBook = {
  book: TBook;
  status: number;
};

export type TBook = {
  author: string;
  cover: string;
  isbn: string;
  published: number;
  title: string;
  id?: number;
  pages?: number;
};

export type TEditFormValues = {
  author: string;
  published: number;
  title: string;
  pages: number;
};

export type TEditField = {
  label: string;
  name: keyof TEditFormValues;
  type?: string;
};
