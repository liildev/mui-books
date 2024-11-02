import IconButton from '@mui/material/IconButton';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

import { useAppStore } from '@/lib/store';

export const ToggleMode = () => {
  const { mode, setMode } = useAppStore();

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
  };

  return (
    <IconButton
      onClick={toggleColorMode}
      size="small"
      aria-label="Theme toggle button"
    >
      {mode === 'dark' ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  );
};
