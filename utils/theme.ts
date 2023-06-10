import { Roboto } from 'next/font/google';
import { createTheme ,responsiveFontSizes} from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});


// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
     
    
  },
  typography: {
    fontFamily: 'Heebo , sans-serif'
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width: 600px)': {
            maxWidth: '680px'
          }
        },
        maxWidthMd: {
          maxWidth: '860',
          '@media (min-width: 900px)': {
            maxWidth: '860px'
          }
        }
      },
      defaultProps: {
        maxWidth: 'md'
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover': {
            color: 'primary.main'
          }
        }
      },
      defaultProps: {
        underline: 'hover'
      }
    },
    MuiButton: {
      variants: [
        {
          props: {variant: 'contained' , color: 'primary'} , 
          style: {
          color: 'white'
        } }
      ]
    }
  }
});


theme = responsiveFontSizes(theme);