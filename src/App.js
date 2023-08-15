import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect } from 'react';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="App">
      {windowWidth <= 425 ? (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      ) : (
        <div className="App-header">
          <h1>Sorry, this app is only available on mobile devices.</h1>
        </div>
      )}
    </div>
  );
}

export default App;
