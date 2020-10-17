import React from 'react';
import logo from '../logo.svg'
const Weather = (props) => {
    return(
        <div className="card" style={{width: "19rem", height:"28rem"}}>
            <img className="card-img-top" src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`} alt="Weather status" mode="fit" width={100} height={200} style={{backgroundColor:'#FF00FF'}}></img>
            <div className="card-body pt-4">
                <p className="card-text">
                        Country : {props.data.city}, {props.data.country} <br />
    Average Temperature: {props.data.avgTemp}&deg;C <br />
                        Range: {minMaxTemp(props.data.minTemp, props.data.maxTemp)} <br />
                        Description: {props.data.description}
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