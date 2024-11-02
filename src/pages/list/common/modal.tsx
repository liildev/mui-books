import { FieldError, useForm } from 'react-hook-form';
import { Modal, Backdrop, Fade } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppStore } from '@/lib/store';
import { useEditBookQuery } from '@/lib/services';
import type {
  TBook,
  TEditField,
  TEditFormValues,
  TListBook,
} from '@/types/books';
import { Btn, Field } from '@/components';
import { editBookSchema } from '@/lib/validations';

export const EditModal = () => {
  const { bookItem, setBookItem } = useAppStore();
  const { mutateAsync, isPending } = useEditBookQuery(onSuccess);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TEditFormValues>({
    resolver: yupResolver(editBookSchema),
  });

  useEffect(() => {
    if (bookItem) {
      reset(bookItem);
    }
  }, [bookItem]);

  function onSuccess(data: TListBook) {
    queryClient.setQueryData<TListBook[]>(['books'], (oldData) =>
      oldData?.map((item) => (item.book.id === data.book.id ? data : item))
    );
    handleCloseModal();
  }

  const handleCloseModal = () => {
    setBookItem(null);
    reset();
  };

  const onSubmit = async (body: TEditFormValues) => {
    await mutateAsync(body as TBook);
  };

  const hasBookItem = Boolean(bookItem);

  const fields: TEditField[] = [
    { label: 'Title', name: 'title' },
    { label: 'Author', name: 'author' },
    { label: 'Published Year', name: 'published', type: 'number' },
    { label: 'Pages', name: 'pages', type: 'number' },
  ];

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      open={hasBookItem}
      onClose={handleCloseModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={hasBookItem}>
        <ModalBody sx={{ width: { xs: 300, sm: 500 } }}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Edit Book
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}
          >
            {fields.map((field) => (
              <Field
                key={field.name}
                label={field.label}
                name={field.name}
                register={register}
                error={errors[field.name as keyof typeof errors] as FieldError}
                type={field.type || 'text'}
              />
            ))}

            <Btn disabled={isPending} loading={isPending} type="submit">
              Update
            </Btn>
          </Box>
        </ModalBody>
      </Fade>
    </Modal>
  );
};

const ModalBody = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(3),
}));
