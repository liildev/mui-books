import { api } from './api';
import { Endpoints } from './endpoints';

import type { IUser, TSignUpFormValues } from '@/types/auth';

const sign = async (body: TSignUpFormValues): Promise<IUser> =>
  (await api.post(Endpoints.Sign, body)).data;

const getMe = async (): Promise<IUser> => (await api.get(Endpoints.GetMe)).data;

export const useGetMeQuery = (hasUser: boolean) =>
  useQuery({
    queryKey: [Endpoints.GetMe],
    queryFn: getMe,
    enabled: hasUser,
  });

export const useSignQuery = (onSuccess: (data: IUser) => void) =>
  useMutation({
    mutationFn: sign,
    onSuccess,
  });
