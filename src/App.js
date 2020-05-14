import React, { Component } from 'react';
import WeatherWidget from './components/WeatherWidget';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "Anchorage",
    };
    this.GetCity = this.GetCity.bind(this);
  }

  GetCity(city) {
    city = city.substring(0, city.indexOf(','));
    this.setState({city})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 align="center">{this.state.city} Weather Forecast</h1>
          <div className="weather-widget">
            <WeatherWidget GetCity={this.GetCity}></WeatherWidget>
          </div>
        </header> 
      </div>
    );
  }
  
}

export default App;
