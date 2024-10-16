import { useAppStore } from "@/lib/store";
import { Title } from "@/components";
import { SearchRounded } from "@mui/icons-material";
import { FormControl, OutlinedInput, InputAdornment, debounce } from "@mui/material";

export const Header = () => {
  const { setSearch } = useAppStore();

  const onSearch = useCallback(
    debounce((bookName: string) => setSearch(bookName), 1000),
    []
  );

  return (
    <Title title="Books">
      <FormControl sx={{ width: { xs: '100%', sm: '40ch' } }} variant="outlined">
        <OutlinedInput
          size="small"
          id="search"
          onChange={e => onSearch(e.target.value)}
          placeholder="Search…"
          sx={{ flexGrow: 1 }}
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
