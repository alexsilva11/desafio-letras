import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { ScoreProvider } from './hooks/ScoreContext';

function App() {
  return (
    <BrowserRouter>
      <ScoreProvider>
        <Routes />
      </ScoreProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
