import {
  AppBar as MuiAppBar,
  IconButton,
  Divider,
  Drawer,
  List,
  MenuItem,
} from '@mui/material';
import { AutoStories, CloseRounded, Menu } from '@mui/icons-material';

import { StyledToolbar } from '../style';
import { NavButtons } from './nav-buttons';
import { ToggleMode } from './toggle-mode';

import { useAppStore } from '@/lib/store';
import { ROUTES } from '@/constants';

export const AppBar = () => {
  const { isDrawer, toggleDrawer } = useAppStore();

  const links = [
    {
      label: 'Source code',
      href: 'https://github.com/liildev/mui-books',
    },
    {
      label: 'Telegram',
      href: 'https://t.me/mansourov',
    },
    {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/liildev',
    },
  ];

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Link to={ROUTES.home}>
            <IconButton sx={{ border: 'none' }}>
              <AutoStories fontSize="medium" />
            </IconButton>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              ml: 3,
            }}
          >
            {links.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="text"
                color="info"
                size="small"
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <NavButtons />

            <ToggleMode />
          </Box>

          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={() => toggleDrawer()}>
              <Menu />
            </IconButton>

            <Drawer anchor="top" open={isDrawer} onClose={toggleDrawer}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={() => toggleDrawer()}>
                    <CloseRounded />
                  </IconButton>

                  <ToggleMode />
                </Box>

                <Divider sx={{ mt: 3 }} />

                <List>
                  {links.map((item) => (
                    <MenuItem key={item.href}>
                      <MuiLink
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </MuiLink>
                    </MenuItem>
                  ))}
                </List>

                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <NavButtons />
                </Box>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </MuiAppBar>
  );
};
