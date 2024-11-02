import * as yup from 'yup';

export const editBookSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  author: yup.string().required('Author is required'),
  published: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? 0 : value))
    .required('Published year is required')
    .positive('Published year is required')
    .integer(),
  pages: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? 0 : value))
    .required('Number of pages is required')
    .positive('Number of pages is required')
    .integer(),
});

export const loginSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  secret: yup
    .string()
    .min(6, 'Secret must be at least 6 characters')
    .required('Secret is required'),
  key: yup
    .string()
    .min(6, 'Key must be at least 6 characters')
    .required('Key is required'),
});
