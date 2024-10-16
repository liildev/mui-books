import { useAppStore } from '@/lib/store';
import type { TRouterProps } from '@/types/app';
import { Router } from 'react-router-dom';

export const HistoryRouter = ({ history, ...props }: TRouterProps) => {
  const { action, location, setHistory } = useAppStore();

  useLayoutEffect(() => history.listen(setHistory), [history]);

  return <Router {...props} location={location} navigationType={action} navigator={history} />;
};
