import React, { Component } from 'react';
import { weatherKey } from '../config.js';
import './WeatherWidget.css';

var http = require("http");

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
            url: "https://api.weatherbit.io/v2.0/forecast/daily?",
            city: "Anchorage,AK",
            cities: [],
            data: [],
            error: null,
        };

        this.GetWeatherIcon = this.GetWeatherIcon.bind(this);
        this.GetDayName = this.GetDayName.bind(this);
        this.GetWeather = this.GetWeather.bind(this);
        this.PopulateDropdown = this.PopulateDropdown.bind(this);
    }

    GetWeather() {
        fetch(`${this.state.url}city=${this.state.city}&units=I&days=7&key=${weatherKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({data: result.data});
                },
                (error) => {
                    this.setState({error});
                }
            )
    }

    GetWeatherIcon(dayIndex) {
        var iconCode = this.state.data[dayIndex]['weather'].icon + '.png';
        return <img src={icons[iconCode]} height="50" width="50"  alt="Weather Icon" />;
    }

    GetDayName(dayIndex) {
        var dt = new Date(this.state.data[dayIndex].valid_date);
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
        }
    }

    ChangeCity(city) {
        this.setState({city}, () => this.GetWeather())
        this.props.GetCity(city);
    }

    PopulateDropdown() {
        let cities = []
        cities.push({value: "Anchorage,AK", display: "Anchorage, AK"});
        cities.push({value: "Scottsdale,AZ", display: "Scottsdale, AZ"});
        cities.push({value: "Los Angeles,CA", display: "Los Angeles, CA"});
        cities.push({value: "Boulder,CO", display: "Boulder, CO"});
        cities.push({value: "Denver,CO", display: "Denver, CO"});
        cities.push({value: "Houston,TX", display: "Houston, TX"});
        cities.push({value: "Seattle,WA", display: "Seattle, WA"});
        
        this.setState({cities});
    }

    componentDidMount() {        
        // get weather from weatherbit.io api
        this.GetWeather();
        // populated dropdown menu with available cities
        this.PopulateDropdown();
    }

    render() {
        
        return (

            <div>
                {/* dropdown menu */}
                {this.state.data.length > 0 && (
                    <div className="dropdown">
                        City: <select onChange={(e) => this.ChangeCity(e.target.value)}>
                            {this.state.cities.map((city) => <option key={city.value} value={city.value}>{city.display}</option>)}
                        </select>
                    </div>
                )}

                {/* weather info */}
                {this.state.data.length > 0 && (
                    <div className='row'>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(0)}
                            <br/>
                            {this.GetDayName(0)}
                            <br/>
                            <label className="high-temp">
                                {this.state.data[0].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.data[0].low_temp}
                            </label>
                            <br/>
                            {this.state.data[0]['weather'].description}
                        </div>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(1)}
                            <br/>
                            {this.GetDayName(1)}
                            <br/>
                            <label className="high-temp">
                                {this.state.data[1].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.data[1].low_temp}
                            </label>
                            <br/>
                            {this.state.data[1]['weather'].description}
                        </div>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(2)}
                            <br/>
                            {this.GetDayName(2)}
                            <br/>
                            <label className="high-temp">
                                {this.state.data[2].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.data[2].low_temp}
                            </label>
                            <br/>
                            {this.state.data[2]['weather'].description}
                        </div>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(3)}
                            <br/>
                            {this.GetDayName(3)}
                            <br/>
                            <label className="high-temp">
                                {this.state.data[3].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.data[3].low_temp}
                            </label>
                            <br/>
                            {this.state.data[3]['weather'].description}
                        </div>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(4)}
                            <br/>
                            {this.GetDayName(4)}
                            <br/>
                            <label className="high-temp">
                                {this.state.data[4].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.data[4].low_temp}
                            </label>
                            <br/>
                            {this.state.data[4]['weather'].description}
                        </div>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(5)}
                            <br/>
                            {this.GetDayName(5)}
                            <br/>
                            <label className="high-temp">
                                {this.state.data[5].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.data[5].low_temp}
                            </label>
                            <br/>
                            {this.state.data[5]['weather'].description}
                        </div>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(6)}
                            <br/>
                            {this.GetDayName(6)}
                            <br/>
                            <label className="high-temp">
                                {this.state.data[6].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.data[6].low_temp}
                            </label>
                            <br/>
                            {this.state.data[6]['weather'].description}
                        </div>
                    </div>
                )}

                {/* week dates */}
                {this.state.data.length > 0 && (
                    <div className="dates">
                        ({this.state.data[0].valid_date.slice(5, 10).replace("-", "/")} - {this.state.data[6].valid_date.slice(5, 10).replace("-", "/")})
                    </div>
                )}
            </div>
            
        );

    }

}

export default WeatherComp;