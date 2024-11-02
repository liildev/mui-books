import { Header } from './common/header';

import { useAppStore } from '@/lib/store';
import { useAddBookQuery } from '@/lib/services';
import { useSearchBooksQuery } from '@/lib/services';
import type { TBook } from '@/types/books';
import { Loader, Book, Btn } from '@/components';

export const Home = () => {
  const { search, addedBooks, toggleBook } = useAppStore();
  const { data, isLoading, error } = useSearchBooksQuery('');
  const { mutate, isPending } = useAddBookQuery(onSuccess);
  const [loadingIsbn, setLoadingIsbn] = useState<string | null>(null);

  function onSuccess(data: TBook) {
    toggleBook(data.isbn);
    setLoadingIsbn(null);
  }

  const handleAddBook = (isbn: string) => {
    setLoadingIsbn(isbn);
    mutate(isbn);
  };

  return (
    <>
      <Header />

      {isLoading ? (
        <Loader />
      ) : !search ? (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5">
            Start searching for your favorite books!
          </Typography>
          <Typography variant="body2">
            Use the search bar above to find books by title
          </Typography>
        </Box>
      ) : data && data.length > 0 ? (
        <Grid2 container spacing={2}>
          {data.map((item, idx) => {
            const isAdded = addedBooks.includes(item.isbn);

            return (
              <Book key={idx} item={item}>
                <Btn
                  onClick={() => handleAddBook(item.isbn)}
                  disabled={isPending || isAdded}
                  loading={loadingIsbn === item.isbn && isPending}
                >
                  {isAdded ? 'Already Added' : 'Add to List'}
                </Btn>
              </Book>
            );
          })}
        </Grid2>
      ) : (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5">No results found</Typography>
          <Typography variant="body2">
            {error?.message ||
              "We couldn't find any books matching your search. Please try a different query"}
          </Typography>
        </Box>
      )}
    </>
  );
};
