import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
      <GlobalStyle/>
    </div>
  );
}

export default App;
