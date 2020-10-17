import React from 'react';
import logo from '../logo.svg'
const Weather = () => {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={logo} alt="Weather status"></img>
            <div className="card-body">
                <p className="card-text">
                        Country : Seoul <br />
                        Average Temperature: 25&deg; <br />
                        Range: {minMaxTemp(22, 35)} <br />
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