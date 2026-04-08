import { createTheme } from '@mui/material/styles';

// Theme inspired by the blue wall calendar design
// Blue accent extracted from the hero image's geometric shapes
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E88E5',       // Calendar blue accent
      light: '#64B5F6',
      dark: '#1565C0',
    },
    secondary: {
      main: '#0D47A1',       // Deep navy for month header
    },
    background: {
      default: '#ECEFF1',    // Light grey page background
      paper: '#FFFFFF',
    },
    // Custom calendar-specific colors
    calendar: {
      today: '#1E88E5',
      todayText: '#FFFFFF',
      rangeStart: '#1565C0',
      rangeEnd: '#1565C0',
      inRange: '#BBDEFB',
      inRangeText: '#0D47A1',
      weekend: '#E53935',
      weekendMuted: '#EF9A9A',
      heroBlue: '#1E88E5',
      heroBlueLight: '#42A5F5',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
