import React from 'react';
import './App.css';
import Background from './Components/Background';
import Nav from './Components/Nav';
import BackgroundText from './Components/BackgroundText';
import About from './Components/About';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Background />
      <BackgroundText />
      <About/>
    </div>
  );
}

export default App;
