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
        // this.GenerateDays = this.GenerateDays.bind(this);
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

    GenerateDays() {
        let days = this.state.days;
        return (
            <div className="row">
                <div className="col-sm">
                    {days[0].name}
                    {days[0].high_temp}
                    {days[0].low_temp}
                </div>
                <div className="col-sm">
                    {days[1].name}
                    {days[1].high_temp}
                    {days[1].low_temp}
                </div>
                <div className="col-sm">
                    {days[2].name}
                    {days[2].high_temp}
                    {days[2].low_temp}
                </div>
                <div className="col-sm">
                    {days[3].name}
                    {days[3].high_temp}
                    {days[3].low_temp}
                </div>
            </div>
        ) 
    }

    componentDidMount() {
        this.SetWeather();
    }

    render() {

        // if (this.state.days.length === 1) {
        //     this.SetWeather();
        // }

        console.log(this.state.days);

        return (

            <div className="container">
                {/* <div className="row">
                    <div className="col-sm">
                        {this.state.days[0].name}
                        <img src={sunny} alt=""/>
                        <br/>
                        <b>{this.state.high_temp}</b>
                    </div>
                    <div className="col-sm">
                        <img src={rainy} alt=""/>
                    </div>
                </div> */}
                <div className="row">
                    {/* <div className="col-sm">
                        {this.state.days[0].name}
                        {this.state.days[0].high_temp}
                        {this.state.days[0].low_temp}
                    </div>
                    <div className="col-sm">
                        {this.state.days[1].name}
                        {this.state.days[1].high_temp}
                        {this.state.days[1].low_temp}
                    </div>
                    <div className="col-sm">
                        {this.state.days[2].name}
                        {this.state.days[2].high_temp}
                        {this.state.days[2].low_temp}
                    </div>
                    <div className="col-sm">
                        {this.state.days[3].name}
                        {this.state.days[3].high_temp}
                        {this.state.days[3].low_temp}
                    </div> */}
                </div>
            </div>

        );

    }

}

export default WeatherComp;