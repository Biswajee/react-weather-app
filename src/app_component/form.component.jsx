import React from 'react';

const Form = props => {
    return(
        <div className="d-flex justify-content-center">
            <form onSubmit="props.loadWeather" className="form-inline py-3">
                <div className="form-group mb-2">
                    <input type="text" className="form-control" name="city" placeholder="City"/>
                </div>
                <div className="form-group mx-sm-5 mb-2">
                    <input type="text" className="form-control" name="country" placeholder="Country"/>
                </div>
                <div className="form-group mb-2">
                    <button className="btn btn-success">Get weather</button>
                </div>
            </form>
        </div>
    );
};

export default Form;