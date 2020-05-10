import React, { Component } from 'react';
import './WeatherWidget.css';
import sunny from "../images/sunny.png";
import rainy from "../images/rainy.png";

class WeatherComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            days: [],
        };

        this.SetWeather = this.SetWeather.bind(this);
    }

    SetWeather() {
        var day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var days = [];
        for (let name in day_names) {
            let temp_day = {day: day_names[name], high_temp: 70, low_temp: 30};
            days.push(temp_day);
        }
        this.setState({ days });
        return days;
    }

    componentDidMount() {
        this.SetWeather();
    }

    render() {

        // if (this.state.days && this.state.length) {
        //     return (
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-sm">
        //                     {console.log(this.state.days)}
        //                     {this.state.days && this.state.length ? this.state.days[0].day : null}
        //                     {this.state.days && this.state.length ? this.state.days[0].high_temp : null}
        //                     {this.state.days && this.state.length ? this.state.days[0].low_temp : null}
        //                 </div>
        //                 <div className="col-sm">
        //                     {this.state.days && this.state.length ? this.state.days[1].day : null}
        //                     {this.state.days && this.state.length ? this.state.days[1].high_temp : null}
        //                     {this.state.days && this.state.length ? this.state.days[1].low_temp : null}
        //                 </div>
        //                 <div className="col-sm">
        //                     {this.state.days && this.state.length ? this.state.days[2].day : null}
        //                     {this.state.days && this.state.length ? this.state.days[2].high_temp : null}
        //                     {this.state.days && this.state.length ? this.state.days[2].low_temp : null}
        //                 </div>
        //                 <div className="col-sm">
        //                     {this.state.days && this.state.length ? this.state.days[3].day : null}
        //                     {this.state.days && this.state.length ? this.state.days[3].high_temp : null}
        //                     {this.state.days && this.state.length ? this.state.days[3].low_temp : null}
        //                 </div>
        //             </div>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div></div>
        //     );
        // }

        return (

            <div>
                {this.state.days.length > 0 && (
                    <div className='row'>
                        <div className='col-sm'>
                            <div className='labels'>
                                {this.state.days[0].day}
                                {this.state.days[0].high_temp}
                                {this.state.days[0].low_temp}
                            </div>
                        </div>
                        <div className='col-sm'>
                            {this.state.days[1].day}
                            {this.state.days[1].high_temp}
                            {this.state.days[1].low_temp}
                        </div>
                        <div className='col-sm'>
                            {this.state.days[2].day}
                            {this.state.days[2].high_temp}
                            {this.state.days[2].low_temp}
                        </div>
                        <div className='col-sm'>
                            {this.state.days[3].day}
                            {this.state.days[3].high_temp}
                            {this.state.days[3].low_temp}
                        </div>
                        <div className='col-sm'>
                            {this.state.days[4].day}
                            {this.state.days[4].high_temp}
                            {this.state.days[4].low_temp}
                        </div>
                        <div className='col-sm'>
                            {this.state.days[5].day}
                            {this.state.days[5].high_temp}
                            {this.state.days[5].low_temp}
                        </div>
                        <div className='col-sm'>
                            {this.state.days[6].day}
                            {this.state.days[6].high_temp}
                            {this.state.days[6].low_temp}
                        </div>
                    </div>
                )}
            </div>

            
            
                // <div className="container">
                //     <div className="row">
                //         <div className="col-sm">
                //             {console.log(this.state.days)}
                //             {this.state.days && this.state.length ? this.state.days[0].day : null}
                //             {this.state.days && this.state.length ? this.state.days[0].high_temp : null}
                //             {this.state.days && this.state.length ? this.state.days[0].low_temp : null}
                //         </div>
                //         <div className="col-sm">
                //             {this.state.days && this.state.length ? this.state.days[1].day : null}
                //             {this.state.days && this.state.length ? this.state.days[1].high_temp : null}
                //             {this.state.days && this.state.length ? this.state.days[1].low_temp : null}
                //         </div>
                //         <div className="col-sm">
                //             {this.state.days && this.state.length ? this.state.days[2].day : null}
                //             {this.state.days && this.state.length ? this.state.days[2].high_temp : null}
                //             {this.state.days && this.state.length ? this.state.days[2].low_temp : null}
                //         </div>
                //         <div className="col-sm">
                //             {this.state.days && this.state.length ? this.state.days[3].day : null}
                //             {this.state.days && this.state.length ? this.state.days[3].high_temp : null}
                //             {this.state.days && this.state.length ? this.state.days[3].low_temp : null}
                //         </div>
                //     </div>
                // </div>
            
        );

    }

}

export default WeatherComp;