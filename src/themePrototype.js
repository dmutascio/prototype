import { createTheme } from '@mui/material/styles';

const themePrototype = createTheme({
  palette: {
    primary: {
      main: '#4f9def',
      light: '#f2f1f1',
      contrastText: '#111111',
    },
    secondary: {
      light: '#0066ff',
      main: '#575757',
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  spacing: 100,
});

export default themePrototype;
