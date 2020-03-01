import React from 'react';
import './App.css';
import Background from './Components/Background';
import Nav from './Components/Nav';
import BackgroundText from './Components/BackgroundText';
import About from './Components/About';
import Services from './Components/Services'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Background />
      <BackgroundText />
      <About/>
      <Services />
    </div>
  );
}

export default App;
