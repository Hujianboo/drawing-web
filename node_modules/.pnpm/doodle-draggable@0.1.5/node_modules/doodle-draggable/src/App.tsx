
import React from 'react';
import logo from './logo.svg';
import './App.css';
import useDraggable from './useDraggable';
function App() {
  const {target} = useDraggable<HTMLDivElement>()
  return (
    <div className="App">
      <div ref={target} className='logo-wrapper'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
