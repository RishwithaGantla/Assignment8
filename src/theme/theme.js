import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: { main: '#ff5722' }, // Orange for hot air balloons
        secondary: { main: '#03a9f4' }, // Blue for sky-like accents
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: { fontSize: '2.5rem', fontWeight: 700},
        body1: { fontSize: '1rem' },
    },
    components: {
      MuiCssBaseline: {
          styleOverrides: {
              body: {
                  backgroundImage: `url('/bg.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'fixed',
                  margin: 0,
                  padding: 0,
              },
          },
      },
  },
});

export default theme;
