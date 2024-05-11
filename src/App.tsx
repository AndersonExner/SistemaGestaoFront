import React from 'react';
import { Header } from './Components/Header';
import { AppRoutes } from './Routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header>
        <AppRoutes/>
      </Header>
    </BrowserRouter>
  )
}

export default App