import { useCallback } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Search } from '../../components/search/search';
import { Footer } from '../../components/footer/footer';

const theme = createTheme();

export function Home() {  return (
    <ThemeProvider theme={theme}>
      <Search />
      <Footer sx={{ mt: 8, mb: 4 }} />
    </ThemeProvider>
  );
}