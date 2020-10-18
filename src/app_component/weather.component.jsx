import React from 'react';
import logo from '../logo.svg'
const Weather = (props) => {
    return(
        <div className="card" style={{width: "19rem", height:"28rem"}}>
            <div className="card-img-top text-center">
                <i className={`wi ${props.icon} display-1 py-5`} />
            </div>
            <div className="card-body pt-4">
                <p className="card-text">
                        Country : {props.data.city}, {props.data.country} <br />
    Average Temperature: {props.data.avgTemp}&deg;C <br />
                        Range: {minMaxTemp(props.data.minTemp, props.data.maxTemp)} <br />
                        Description: {props.data.description.charAt(0).toUpperCase() + props.data.description.slice(1)}
                </p>
            </div>
        </div>
    )
};

function minMaxTemp(min, max) {
    return(
        <span>
            <span className="pr-4">{min}&deg;C (Min)</span>
            <span className="pr-4">{max}&deg;C (Max)</span>
        </span>
    )
};

export default Weather;