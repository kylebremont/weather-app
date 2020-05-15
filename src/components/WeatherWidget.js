import React, { Component } from 'react';
import { weatherKey } from '../config.js';
import './WeatherWidget.css';


// import all the icons
function ImportIcons(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const icons = ImportIcons(require.context("../assets/icons", false, /.*\.png$/));

class WeatherComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            forecast_url: "https://api.weatherbit.io/v2.0/forecast/daily?",
            current_url: "https://api.weatherbit.io/v2.0/current?",
            current_city: "Anchorage,AK",
            cities: [],
            forecast_data: [],
            current_weather_data: [],
            error: null,
        };

        this.GetWeatherIcon = this.GetWeatherIcon.bind(this);
        this.GetDayName = this.GetDayName.bind(this);
        this.GetWeatherForecast = this.GetWeatherForecast.bind(this);
        this.GetCurrentWeather = this.GetCurrentWeather.bind(this);
        this.PopulateDropdown = this.PopulateDropdown.bind(this);
        this.ChangeCity = this.ChangeCity.bind(this);
    }

    GetWeatherForecast() {
        fetch(`${this.state.forecast_url}city=${this.state.current_city}&units=I&days=7&key=${weatherKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({forecast_data: result.data});
                },
                (error) => {
                    this.setState({error});
                }
            )
    }

    GetCurrentWeather() {
        fetch(`${this.state.current_url}city=${this.state.current_city}&units=I&key=${weatherKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({current_weather_data: result.data}, () => {this.GetWeatherForecast()})
                },
                (error) => {
                    this.setState({error});
                }
            )
    }

    GetWeatherIcon(dayIndex) {
        var iconCode = this.state.forecast_data[dayIndex]['weather'].icon + '.png';
        return <img src={icons[iconCode]} height="50" width="50"  alt="Weather Icon" />;
    }

    GetCurrentWeatherIcon() {
        var iconCode = this.state.current_weather_data[0]['weather'].icon + '.png';
        return <img src={icons[iconCode]} height="50" width="50" alt="Weather Icon" />;
    }

    GetDayName(dayIndex) {
        var dt = new Date(this.state.forecast_data[dayIndex].valid_date);
        var day = dt.getDay();
        switch (day) {
            case 0:
                return "Monday";
            case 1:
                return "Tuesday";
            case 2:
                return "Wednesday";
            case 3:
                return "Thursday";
            case 4:
                return "Friday";
            case 5:
                return "Saturday";
            case 6:
                return "Sunday";
            default:
                return "Error";
        }
    }

    ChangeCity(city) {
        this.setState({current_city: city}, () => this.GetCurrentWeather())
        this.props.GetCity(city);
    }

    PopulateDropdown() {
        let cities = []
        cities.push({value: "Anchorage,AK", display: "Anchorage, AK"});
        cities.push({value: "Scottsdale,AZ", display: "Scottsdale, AZ"});
        cities.push({value: "Los Angeles,CA", display: "Los Angeles, CA"});
        cities.push({value: "Boulder,CO", display: "Boulder, CO"});
        cities.push({value: "Denver,CO", display: "Denver, CO"});
        cities.push({value: "Orlando,FL", display: "Orlando, FL"});
        cities.push({value: "Chicago,IL", display: "Chicago, IL"});
        cities.push({value: "New York,NY", display: "New York, NY"});
        cities.push({value: "Athens,TN", display: "Athens, TN"});
        cities.push({value: "Knoxville,TN", display: "Knoxville, TN"});
        cities.push({value: "Houston,TX", display: "Houston, TX"});
        cities.push({value: "Seattle,WA", display: "Seattle, WA"});
        
        this.setState({cities});
    }

    componentDidMount() {
        // get current weather, has callback to get weather forecast
        this.GetCurrentWeather();
        // populated dropdown menu with available cities
        this.PopulateDropdown();
    }

    render() {
        
        return (

            <div>
                {/* dropdown menu */}
                {this.state.forecast_data.length > 0 && (
                    <div className="dropdown">
                        City: <select onChange={(e) => this.ChangeCity(e.target.value)}>
                            {this.state.cities.map((city) => <option key={city.value} value={city.value}>{city.display}</option>)}
                        </select>
                    </div>
                )}

                {/* weather info */}
                {(this.state.forecast_data.length > 0 && this.state.current_weather_data.length > 0) && (
                    <div>
                        <div className='col-sm'>
                            {this.GetCurrentWeatherIcon()}
                            <br/>
                            {this.GetDayName(0)}
                            <br/>
                            <label className="current-temp">
                                {this.state.current_weather_data[0].temp + "°"}
                            </label>
                            <br/>
                            <label className="high-temp">
                                {this.state.forecast_data[0].high_temp + "°"}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.forecast_data[0].low_temp + "°"}
                            </label>
                            <br/>
                        </div>
                        <div className='row'>
                            
                            <div className='col-sm'>
                                {this.GetWeatherIcon(1)}
                                <br/>
                                {this.GetDayName(1)}
                                <br/>
                                <label className="high-temp">
                                    {this.state.forecast_data[1].high_temp + "°"}
                                </label>
                                <br/>
                                <label className="low-temp">
                                    {this.state.forecast_data[1].low_temp + "°"}
                                </label>
                                <br/>
                            </div>
                            <div className='col-sm'>
                                {this.GetWeatherIcon(2)}
                                <br/>
                                {this.GetDayName(2)}
                                <br/>
                                <label className="high-temp">
                                    {this.state.forecast_data[2].high_temp + "°"}
                                </label>
                                <br/>
                                <label className="low-temp">
                                    {this.state.forecast_data[2].low_temp + "°"}
                                </label>
                                <br/>
                            </div>
                            <div className='col-sm'>
                                {this.GetWeatherIcon(3)}
                                <br/>
                                {this.GetDayName(3)}
                                <br/>
                                <label className="high-temp">
                                    {this.state.forecast_data[3].high_temp + "°"}
                                </label>
                                <br/>
                                <label className="low-temp">
                                    {this.state.forecast_data[3].low_temp + "°"}
                                </label>
                                <br/>
                            </div>
                            <div className='col-sm'>
                                {this.GetWeatherIcon(4)}
                                <br/>
                                {this.GetDayName(4)}
                                <br/>
                                <label className="high-temp">
                                    {this.state.forecast_data[4].high_temp + "°"}
                                </label>
                                <br/>
                                <label className="low-temp">
                                    {this.state.forecast_data[4].low_temp + "°"}
                                </label>
                                <br/>
                            </div>
                            <div className='col-sm'>
                                {this.GetWeatherIcon(5)}
                                <br/>
                                {this.GetDayName(5)}
                                <br/>
                                <label className="high-temp">
                                    {this.state.forecast_data[5].high_temp + "°"}
                                </label>
                                <br/>
                                <label className="low-temp">
                                    {this.state.forecast_data[5].low_temp + "°"}
                                </label>
                                <br/>
                            </div>
                            <div className='col-sm'>
                                {this.GetWeatherIcon(6)}
                                <br/>
                                {this.GetDayName(6)}
                                <br/>
                                <label className="high-temp">
                                    {this.state.forecast_data[6].high_temp + "°"}
                                </label>
                                <br/>
                                <label className="low-temp">
                                    {this.state.forecast_data[6].low_temp + "°"}
                                </label>
                                <br/>
                            </div>
                        </div>
                    </div>
                )}

                {/* week dates */}
                {this.state.forecast_data.length > 0 && (
                    <div className="dates">
                        ({this.state.forecast_data[0].valid_date.slice(5, 10).replace("-", "/")} - {this.state.forecast_data[6].valid_date.slice(5, 10).replace("-", "/")})
                    </div>
                )}
            </div>
            
        );

    }

}

export default WeatherComp;