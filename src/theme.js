  
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4844a3',
    },
    secondary: {
      main: '#19ca95',
      contrastText: '#fff'
    },
    error: {
      main: '#ff556e',
    },
    background: {
      default: '#fafafa',
    },
  },
});

export default theme;