import { Delete } from '@mui/icons-material';

import { EditModal } from './common/modal';

import { useGetBooksQuery } from '@/lib/services';
import { useDeleteBookQuery } from '@/lib/services';
import { useAppStore } from '@/lib/store';
import { Book, Btn, Loader, Title } from '@/components';
import { Endpoints } from '@/lib/services/endpoints';

export const MyList = () => {
  const { mutate } = useDeleteBookQuery(onSuccess);
  const { setBookItem, toggleBook } = useAppStore();
  const { data, isLoading } = useGetBooksQuery();
  const [bookId, setBookId] = useState<string | null>(null);
  const isMutating = useIsMutating();
  const queryClient = useQueryClient();

  function onSuccess() {
    queryClient.invalidateQueries({ queryKey: [Endpoints.Books] });
    toggleBook(String(bookId));
    setBookId(null);
  }

  const handleDeleteBook = (id: number) => {
    mutate(id);
    setBookId(String(id));
  };

  return (
    <>
      <Title title="My list" />
      <EditModal />

      {isLoading ? (
        <Loader />
      ) : data && data?.length > 0 ? (
        <Grid2 container spacing={2}>
          {data.map(({ book }, idx) => (
            <Book key={idx} item={book}>
              <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
                <Btn
                  fullWidth
                  onClick={() => setBookItem(book)}
                  disabled={!!isMutating}
                >
                  Edit
                </Btn>

                <Btn
                  variant="outlined"
                  onClick={() => handleDeleteBook(Number(book.id))}
                  disabled={!!isMutating}
                >
                  <Delete />
                </Btn>
              </Box>
            </Book>
          ))}
        </Grid2>
      ) : (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5">Your List is Empty</Typography>
          <Typography variant="body2">
            You currently have no books in your collection
          </Typography>
        </Box>
      )}
    </>
  );
};
