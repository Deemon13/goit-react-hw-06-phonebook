import React from 'react';
import ReactDOM from 'react-dom';
import { Global, ThemeProvider } from '@emotion/react';

import { GlobalStyles } from 'components/GlobalStyle/GlobalStyle';
import { Normalize } from 'components/GlobalStyle/Normalize';
import { App } from 'components/App';
import { theme } from 'constants/theme';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={Normalize} />
    <Global styles={GlobalStyles} />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
