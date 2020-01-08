import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './store/auth/reducers';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import  App  from './components/App/App';
import { ThemeProvider, StylesProvider, withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleware);

const theme = createMuiTheme({
  palette: {
    primary:  {
      main: '#24c0fd'
    },
    error:  {
      main: '#d73c2a'
    },
    secondary: {
      main: '#346ef3'
    }
  }
});

const GlobalCSS = withStyles({
  '@global': {
    '.MuiButton-contained': {
      fontSize: '14px',
      borderRadius: '50px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      width: '140px',
      color: '#f8f7ff',
      margin: '20px auto'
    },
    '.MuiInputBase-input': {
      height: '0px'
    },
    '.MuiOutlinedInput-root': {
      borderRadius: '50px'
    },
    '.MuiInputLabel-outlined': {
      position: 'absolute',
      top: '14px',
      left: '23px',
      fontSize: '14px',
      color: '#20233f',
      transform: 'none',
      transition: 'all 0.2s ease-in-out',
    },
    '.MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(0, -35px) scale(0.9)'
    },
    '.MuiTextField-root': {
      height: '0px',
      margin: '40px auto',
      width: '90%'
    },
    '.MuiOutlinedInput-input': {
      height: '30px',
      padding: '5px 15px',
      width: '100%'
    },
    '.PrivateNotchedOutline-root-135': {
      top: '0px'
    },
    '.MuiDialogContent-root:first-child': {
      paddingTop: '0px'
    },
    '.MuiDialogContent-root': {
      textAlign: 'center',
      position: 'relative'
    }
  }
})(() => null);

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>

      <ThemeProvider theme={theme}>
        <StylesProvider>
          <GlobalCSS />
          <App/>
        </StylesProvider>
      </ThemeProvider>

    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

