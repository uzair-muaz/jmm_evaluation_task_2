import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'sans-serif'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'none',
          fontFamily: 'sans-serif'
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 350,
      md: 768, // Medium devices (tablets)
      lg: 1200, // Large devices (laptops/desktops)
      xl: 1920 // Extra large devices (large desktops)
    }
  }
});
