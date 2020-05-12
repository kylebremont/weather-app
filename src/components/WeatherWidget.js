import React, { Component } from 'react';
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
            url: "http://35.188.59.17:3500/",
            days: [],
        };

        this.SetWeather = this.SetWeather.bind(this);
        this.GetWeatherIcon = this.GetWeatherIcon.bind(this);
    }

    SetWeather() {
        var url = this.state.url + "weather";
        http.get(url, (res) => {
            const { statusCode } = res;
            const contentType = res.headers['content-type'];

            // validate response
            let error;
            if (statusCode !== 200) {
                error = new Error('Request Failed.\n' + 'Status Code: ' + statusCode);
            } else if (!/^application\/json/.test(contentType)) {
                error = new Error('Invalid content-type.\n' + 'Expected application/json but received ' + contentType);
            }
            if (error) {
                console.error(error.message);
                // consume response data to free up memory
                res.resume();
                return;
            }

            res.setEncoding('utf8');
            let rawData = '';

            res.on('data', (chunk) => { rawData += chunk; });

            // parse response
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    this.setState({days: parsedData});
                } catch (e) {
                    console.error(e.message);
                }
            });
        }).on('error', (e) => {
            console.error('Got error: ' + e.message);
        });
    }

    GetWeatherIcon(dayIndex) {
        var iconCode = this.state.days[dayIndex].icon + '.png';
        return <img src={icons[iconCode]} height="50" width="50"  alt="Weather Icon" />;
    }

    GetDayName(dayIndex) {
        var dt = new Date(this.state.days[dayIndex].date);
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

    componentDidMount() {
        // get weather from server
        this.SetWeather();
    }

    render() {


        return (

            <div>
                {this.state.days.length > 0 && (
                    <div className='row'>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(0)}
                            <br/>
                            {this.GetDayName(0)}
                            <br/>
                            <label className="high-temp">
                                {this.state.days[0].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.days[0].low_temp}
                            </label>
                            <br/>
                            {this.state.days[0].description}
                        </div>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(1)}
                            <br/>
                            {this.GetDayName(1)}
                            <br/>
                            <label className="high-temp">
                                {this.state.days[1].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.days[1].low_temp}
                            </label>
                            <br/>
                            {this.state.days[1].description}
                        </div>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(2)}
                            <br/>
                            {this.GetDayName(2)}
                            <br/>
                            <label className="high-temp">
                                {this.state.days[2].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.days[2].low_temp}
                            </label>
                            <br/>
                            {this.state.days[2].description}
                        </div>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(3)}
                            <br/>
                            {this.GetDayName(3)}
                            <br/>
                            <label className="high-temp">
                                {this.state.days[3].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.days[3].low_temp}
                            </label>
                            <br/>
                            {this.state.days[3].description}
                        </div>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(4)}
                            <br/>
                            {this.GetDayName(4)}
                            <br/>
                            <label className="high-temp">
                                {this.state.days[4].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.days[4].low_temp}
                            </label>
                            <br/>
                            {this.state.days[4].description}
                        </div>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(5)}
                            <br/>
                            {this.GetDayName(5)}
                            <br/>
                            <label className="high-temp">
                                {this.state.days[5].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.days[5].low_temp}
                            </label>
                            <br/>
                            {this.state.days[5].description}
                        </div>
                        <div className='col-sm'>
                            {this.GetWeatherIcon(6)}
                            <br/>
                            {this.GetDayName(6)}
                            <br/>
                            <label className="high-temp">
                                {this.state.days[6].high_temp}
                            </label>
                            <br/>
                            <label className="low-temp">
                                {this.state.days[6].low_temp}
                            </label>
                            <br/>
                            {this.state.days[6].description}
                        </div>
                    </div>
                )}

                {this.state.days.length > 0 && (
                    <div className="dates">
                        ({this.state.days[0].date.slice(5, 10).replace("-", "/")} - {this.state.days[6].date.slice(5, 10).replace("-", "/")})
                    </div>
                )}
            </div>
            
        );

    }

}

export default WeatherComp;