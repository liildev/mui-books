import { Endpoints } from './endpoints';
import { api } from './api';

import type { TBook, TListBook } from '@/types/books';

const getBooks = async (): Promise<TListBook[]> =>
  (await api.get(Endpoints.Books)).data;

const searchBooks = async (bookName: string): Promise<TBook[]> =>
  (await api.get(`${Endpoints.Books}/${bookName}`)).data;

const addBook = async (isbn: string) =>
  (await api.post(Endpoints.Books, { isbn })).data;

const editBook = async (body: TBook) =>
  (await api.patch(`${Endpoints.Books}/${body.id}`, body)).data;

const deleteBook = async (id: number) => {
  await api.delete(`${Endpoints.Books}/${id}`);
};

export const useGetBooksQuery = () =>
  useQuery<TListBook[]>({
    queryKey: [Endpoints.Books],
    queryFn: getBooks,
  });

export const useSearchBooksQuery = (bookName: string) =>
  useQuery<TBook[]>({
    queryKey: [Endpoints.Books, bookName],
    queryFn: () => searchBooks(bookName),
    enabled: !!bookName,
  });

export const useAddBookQuery = (onSuccess: (data: TBook) => void) =>
  useMutation({
    mutationFn: addBook,
    onSuccess,
  });

export const useEditBookQuery = (onSuccess: (data: TListBook) => void) =>
  useMutation({
    mutationFn: editBook,
    onSuccess,
  });

export const useDeleteBookQuery = (onSuccess: () => void) =>
  useMutation({
    mutationFn: deleteBook,
    onSuccess,
  });
