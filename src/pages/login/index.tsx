import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { StyledCard } from './style';

import { useSignQuery } from '@/lib/services';
import { useAuthStore } from '@/lib/store';
import type { IUser, TSignUpFormValues } from '@/types/auth';
import { Btn, Field } from '@/components';
import { history, storage } from '@/lib/utils';
import { loginSchema } from '@/lib/validations';
import { KEYS, ROUTES } from '@/constants';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpFormValues>({
    resolver: yupResolver(loginSchema),
  });
  const { headers, setUser, setHeaders } = useAuthStore();
  const { mutateAsync, isPending } = useSignQuery(onSuccess);

  function onSuccess(data: IUser) {
    setUser(data);
    history.push(ROUTES.home);
    storage.setItem(KEYS.headers, headers);
  }

  const onSubmit = (body: TSignUpFormValues) => {
    const headers = {
      key: body.key,
      secret: body.secret,
    };

    setHeaders(headers);
    mutateAsync(body);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <StyledCard variant="outlined">
        <Typography
          component="h2"
          variant="h4"
          sx={{ fontWeight: 600, fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
        >
          Sign Up
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Field
            label="Full name"
            name="name"
            placeholder="Jon Snow"
            register={register}
            error={errors.name}
          />

          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="your@email.com"
            register={register}
            error={errors.email}
          />

          <Field
            label="Key"
            name="key"
            placeholder="••••••"
            register={register}
            error={errors.key}
          />

          <Field
            label="Secret"
            name="secret"
            placeholder="••••••"
            register={register}
            error={errors.secret}
          />

          <Btn disabled={isPending} loading={isPending} type="submit" fullWidth>
            Submit
          </Btn>
        </Box>
      </StyledCard>
    </Container>
  );
};
