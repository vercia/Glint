import React from 'react';
import './App.css';
import Background from './Components/Background';
import Nav from './Components/Nav';
import BackgroundText from './Components/BackgroundText';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Background />
      <BackgroundText />
    </div>
  );
}

export default App;
