import { SearchRounded } from '@mui/icons-material';
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  debounce,
} from '@mui/material';

import { useAppStore } from '@/lib/store';
import { Title } from '@/components';

export const Header = () => {
  const { setSearch } = useAppStore();

  const onSearch = useCallback(
    debounce((bookName: string) => setSearch(bookName), 1000),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    onSearch(value);
  };

  return (
    <Title title="Books">
      <FormControl
        sx={{ width: { xs: '100%', sm: '40ch' } }}
        variant="outlined"
      >
        <OutlinedInput
          size="small"
          id="search"
          onChange={handleInputChange}
          placeholder="Search…"
          startAdornment={
            <InputAdornment position="start" sx={{ color: 'text.primary' }}>
              <SearchRounded fontSize="small" />
            </InputAdornment>
          }
          inputProps={{
            'aria-label': 'search',
          }}
        />
      </FormControl>
    </Title>
  );
};
