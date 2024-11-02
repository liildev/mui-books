import { TTitleProps } from '@/types/app';

export const Title = ({ title, children }: TTitleProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'start', sm: 'center' },
        justifyContent: 'space-between',
        gap: 2,
        mb: 5,
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: 32, sm: 48, md: 56 }, fontWeight: 600 }}
      >
        {title}
      </Typography>

      {children}
    </Box>
  );
};
