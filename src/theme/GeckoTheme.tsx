import { createTheme } from '@mui/material/styles';

export const geckoTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#55A630',
            contrastText: '#F6F4EB',
        },
        secondary: {
            main: '#283E30',
            contrastText: '#F6F4EB',
        },
        background: {
            default: '#F6F4EB',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#283E30',
        },
    },
    typography: {
        fontFamily: 'Poppins',
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 800,
          lg: 1000,
          xl: 1300,
        },
      },
})