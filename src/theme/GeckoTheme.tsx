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
            paper: '#F4F8D4',
        },
        text: {
            primary: '#283E30',
        },
    },
    typography: {
        fontFamily: 'Poppins',
    },
})