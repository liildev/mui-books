import { ROUTES } from '@/constants';
import { useAuthStore } from '@/lib/store';

export const Protected = () => {
  const { user } = useAuthStore();
  return user ? <Outlet /> : <Navigate to={ROUTES.sign} />;
};
