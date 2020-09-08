import React from 'react';
import './App.css';

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'


function App() {
  return (
    <>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />

    </>
  );
}

export default App;
