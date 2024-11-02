import { Toaster } from 'react-hot-toast';

import {
  HistoryRouterProvider,
  TanstackProvider,
  ThemeProvider,
} from './providers';

import { Router } from '@/router';
import { history } from '@/lib/utils';

export const App = () => {
  return (
    <HistoryRouterProvider history={history}>
      <Toaster />
      <ThemeProvider>
        <TanstackProvider>
          <Router />
        </TanstackProvider>
      </ThemeProvider>
    </HistoryRouterProvider>
  );
};
