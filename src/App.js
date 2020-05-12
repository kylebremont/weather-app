import React from 'react';
import WeatherWidget from './components/WeatherWidget';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;


function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1 align="center">Hello World</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header className="App-header">
        <h1 align="center">Boulder Weather Forecast</h1>
        <div className="weather-widget">
          <WeatherWidget></WeatherWidget>
        </div>
      </header>
      
    </div>
  );
}

export default App;
