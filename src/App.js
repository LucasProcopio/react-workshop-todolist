import React from 'react';
import { render } from 'react-dom';

import Home from './pages/Home';

import GlobalStyle from './styles/global';

const App = function() {
  return <Home />;
};

render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById('root')
);
