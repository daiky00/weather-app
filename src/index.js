import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import store from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import theme from './theme';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </SnackbarProvider>
  </ThemeProvider>
  , rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
