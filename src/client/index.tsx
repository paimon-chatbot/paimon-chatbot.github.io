import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Theme, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'

import store from './store'
import Favicon from './components/favicon'
import LandingPage from './components/landing-page'

const theme:Theme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: 'rgb(34, 39, 51)',
      secondary: 'white'
    },
    primary: {
      light: 'rgb(76, 83, 108)',
      main: 'rgb(61, 65, 86)',
      dark: 'rgb(34, 39, 51)',
      contrastText: 'white'
    },
    background: {
      paper: 'rgb(238, 233, 221)'
    }
  }
})

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Favicon/>
      <LandingPage/>
    </ThemeProvider>
  </Provider>
, document.getElementById('root'))