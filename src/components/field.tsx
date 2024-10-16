import { FieldValues } from 'react-hook-form';
import { FieldProps } from '@/types/app';
import { FormControl, FormLabel, TextField } from '@mui/material';

export const Field = <T extends FieldValues>({
  name,
  label,
  register,
  error,
  ...props
}: FieldProps<T>) => {
  return (
    <FormControl fullWidth error={!!error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <TextField
        id={name}
        {...register(name)}
        error={!!error}
        helperText={error?.message}
        {...props}
      />
    </FormControl>
  );
};
