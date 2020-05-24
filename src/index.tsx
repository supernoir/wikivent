import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './styles';
import { CacheProvider } from 'rest-hooks';
import './i18n';
import 'core-js/stable';
import 'whatwg-fetch';

ReactDOM.render(
  <React.StrictMode>
    <CacheProvider>
      <GlobalStyle />
      <App />
    </CacheProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();