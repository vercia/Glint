import React from 'react';
import './index.css';
import Background from './Components/Background';
import Nav from './Components/Nav';
import BackgroundText from './Components/BackgroundText';
import About from './Components/About';
import Services from './Components/Services'
import Works from './Components/Works'
import Clients from './Components/Clients'
import BackgroundOfContact from './Components/BackgroundOfContact';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Background />
      <BackgroundText />
      <About />
      <Services />
      <Works />
      <Clients />
      <BackgroundOfContact />
      <Contact />
    </div>
  );
}

export default App;
