import React from 'react';
import Cards from './components/Cards';
import ParallaxTiltEffect from './components/ParallaxTiltEffect'; 
import './App.css'; // for only ParallaxTiltEffect.js
import './another/App1.css'; // for only Cards.js

function App() {
  
  return(
    <div className='App'>
      <Cards/>
      <ParallaxTiltEffect/>
      
    </div>
  )
}

export default App;
