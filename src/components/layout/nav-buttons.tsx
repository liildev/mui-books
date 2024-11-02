import { Link } from 'react-router-dom'; // Make sure to import Link
import { useMediaQuery } from '@mui/material';
import { Button } from '@mui/material'; // Import Button

import { useAppStore, useAuthStore } from '@/lib/store';
import { ROUTES } from '@/constants';

export const NavButtons = () => {
  const { logout } = useAuthStore();
  const { toggleDrawer } = useAppStore();
  const matches = useMediaQuery('(min-width:600px)');

  const handleMyListClick = () => {
    if (!matches) {
      toggleDrawer();
    }
  };

  return (
    <>
      <Link to={ROUTES.myList} onClick={handleMyListClick}>
        <Button variant="outlined" size="small">
          My list
        </Button>
      </Link>

      <Button color="primary" variant="contained" size="small" onClick={logout}>
        Logout
      </Button>
    </>
  );
};
