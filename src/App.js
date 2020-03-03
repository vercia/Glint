import React from 'react';
import './index.css';
import Background from './Components/Background';
import Nav from './Components/Nav';
import BackgroundText from './Components/BackgroundText';
import About from './Components/About';
import Services from './Components/Services'
import Works from './Components/Works'
import Clients from './Components/Clients'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Background />
      <BackgroundText />
      <About/>
      <Services />
      <Works />
      <Clients />
    </div>
  );
}

export default App;
