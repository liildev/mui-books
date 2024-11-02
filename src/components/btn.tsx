import { CircularProgress, ButtonProps } from '@mui/material';

interface IButtonProps extends ButtonProps {
  loading?: boolean;
}

export const Btn: React.FC<IButtonProps> = ({
  loading = false,
  children,
  ...props
}) => {
  return (
    <Button
      disabled={loading || props.disabled}
      variant={props.variant || 'contained'}
      {...props}
    >
      {loading ? (
        <CircularProgress size={24} sx={{ color: '#fff' }} />
      ) : (
        children
      )}
    </Button>
  );
};
