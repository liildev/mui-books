import { FC, PropsWithChildren } from 'react';
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const Tanstack: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient({
    mutationCache: new MutationCache({
      onError: (error) => {
        toast.error(
          error?.message || 'Something went wrong, please try again later',
          { duration: 3000, position: 'top-center' }
        );
      },
    }),
    defaultOptions: {
      queries: {
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
