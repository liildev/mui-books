import { useAuthStore } from '../store';
import { useGetMeQuery } from '../services';

export const useUserGetMe = () => {
  const { user, setUser } = useAuthStore();
  const { data, isFetched } = useGetMeQuery(!!user);

  useEffect(() => {
    if (data && isFetched) {
      setUser(data);
    }
  }, [data, isFetched]);
};
