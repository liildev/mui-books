import { AppBar } from './app-bar';

export const Layout = () => {
  return (
    <>
      <AppBar />

      <Container maxWidth="lg" component="main" sx={{ py: 16, pb: 8, gap: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};
