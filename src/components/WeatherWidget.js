import React, { Component } from 'react';
import sunny from "../images/sunny.png";
import rainy from "../images/rainy.png";

class WeatherComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            days: [{}],
        };

        this.SetWeather = this.SetWeather.bind(this);
    }

    SetWeather() {
        var day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let days = [];
        for (let name in day_names) {
            let temp_day = {day: day_names[name], high_temp: 70, low_temp: 30};
            days.push(temp_day);
        }
        this.setState({ days });
    }

    componentDidMount() {
        this.SetWeather();
    }

    render() {

        console.log(this.state.days);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        {this.state.days && this.state.length ? this.state.days[0].name : null}
                        {this.state.days && this.state.length ? this.state.days[0].high_temp : null}
                        {this.state.days && this.state.length ? this.state.days[0].low_temp : null}
                    </div>
                    <div className="col-sm">
                        {this.state.days && this.state.length ? this.state.days[1].name : null}
                        {this.state.days && this.state.length ? this.state.days[1].high_temp : null}
                        {this.state.days && this.state.length ? this.state.days[1].low_temp : null}
                    </div>
                    <div className="col-sm">
                        {this.state.days && this.state.length ? this.state.days[2].name : null}
                        {this.state.days && this.state.length ? this.state.days[2].high_temp : null}
                        {this.state.days && this.state.length ? this.state.days[2].low_temp : null}
                    </div>
                    <div className="col-sm">
                        {this.state.days && this.state.length ? this.state.days[3].name : null}
                        {this.state.days && this.state.length ? this.state.days[3].high_temp : null}
                        {this.state.days && this.state.length ? this.state.days[3].low_temp : null}
                    </div>
                </div>
            </div>
        );

    }

}

export default WeatherComp;