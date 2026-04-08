import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import WallCalendar from './components/WallCalendar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline resets browser default styles */}
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 2, md: 4 },
          px: { xs: 1, md: 2 },
        }}
      >
        <WallCalendar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
