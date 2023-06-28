import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './style/global';

import theme from './style/theme';

import { Details } from './pages/Details'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <GlobalStyles/>
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
