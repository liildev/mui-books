import { useAppStore, useAuthStore } from "@/lib/store";
import { ROUTES } from "@/constants";

export const NavButtons = () => {
  const { logout } = useAuthStore();
  const { toggleDrawer } = useAppStore()

  return (
    <>
      <Link to={ROUTES.myList} onClick={toggleDrawer}>
        <Button variant="outlined" size='small'>
          My list
        </Button>
      </Link>

      <Button color="primary" variant="contained" size="small" onClick={logout}>
        Logout
      </Button>
    </>
  )
};
