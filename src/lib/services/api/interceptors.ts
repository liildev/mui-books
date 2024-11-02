import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import CryptoJS from 'crypto-js';

import { useAuthStore } from '@/lib/store';

export const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const headers = useAuthStore.getState().headers;

  if (headers) {
    const { key, secret } = headers;

    const method = config.method?.toUpperCase() || 'GET';
    const path = config.url;
    const body = config.data ? JSON.stringify(config.data) : '';

    const signStr = `${method}/${path}${body}${secret}`;

    const sign = CryptoJS.MD5(signStr).toString();

    config.headers.set('Key', key);
    config.headers.set('Sign', sign);
  }

  return config;
};

export const successInterceptor = (
  response: AxiosResponse
): Promise<AxiosResponse> => {
  return Promise.resolve(response.data);
};

export const errorInterceptor = (error: AxiosError): Promise<never> => {
  if (error.response?.status === 401) {
    useAuthStore.getState().logout();
  }

  return Promise.reject(error?.response?.data);
};
