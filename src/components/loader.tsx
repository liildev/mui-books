import { LinearProgress } from '@mui/material';

export const Loader = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress color="info" sx={{ height: 4 }} />
    </Box>
  );
};
