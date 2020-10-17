import React from 'react';
import logo from '../logo.svg'
const Weather = (props) => {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={logo} alt="Weather status"></img>
            <div className="card-body">
                <p className="card-text">
                        Country : {props.data.city}, {props.data.country} <br />
    Average Temperature: {props.data.avgTemp}&deg; <br />
                        Range: {minMaxTemp(props.data.minTemp, props.data.maxTemp)} <br />
                        Description: Slow rain
                </p>
            </div>
        </div>
    )
};

function minMaxTemp(min, max) {
    return(
        <span>
            <span className="pr-4">{min}&deg; (Min)</span>
            <span className="pr-4">{max}&deg;(Max)</span>
        </span>
    )
};


export default Weather;