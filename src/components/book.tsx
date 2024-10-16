import type { TBooksProps } from "@/types/app";
import { CardMedia, Divider } from "@mui/material";
import { StyledCard, StyledCardContent } from "./style";
import { AccountCircle, Event, Pages } from "@mui/icons-material";

export const Book = ({ item, children }: TBooksProps) => {
  return (
    <Grid2 size={{ xs: 12, sm: 6, md: 4, xl: 3 }}>
      <StyledCard variant="outlined">
        <CardMedia
          component="img"
          alt={item.title}
          image={item.cover}
          sx={{
            borderBottom: '1px solid',
            borderColor: 'divider',
            aspectRatio: '16/9',
          }}
        />
        <StyledCardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Item label={item.author} icon={<AccountCircle />} />
            <Item label={item.published ? `${item.published} year` : 'Unknown'} icon={<Event />} />
            {item.pages && <Item label={item.pages} icon={<Pages />} />}
          </Box>
          <Typography gutterBottom variant="h6" component="h2">
            {item.title}
          </Typography>
          <Divider sx={{ mb: 2, mt: 'auto' }} />

          {children}
        </StyledCardContent>
      </StyledCard>
    </Grid2>
  );
};

const Item = ({ label, icon }: { label: string | number; icon: React.ReactNode }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
    {icon}
    <Typography variant="caption">{label}</Typography>
  </Box>
)
