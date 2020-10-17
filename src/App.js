import React from 'react';
import Weather from './app_component/weather.component'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.min.css'
import data from './secrets/secrets.json'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: {
                city: null,
                country: null,
                avgTemp: null,
                minTemp: null,
                maxTemp: null,
                description: "Loading..."
            }
        };
    }

    computeCelsiusFromKelvin(temperature) {
        temperature-=273.15;
        return Math.round(temperature);
    }

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${data.API_KEY}`)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    data: {
                        city: result.name,
                        country: result.sys.country,
                        avgTemp: this.computeCelsiusFromKelvin(result.main.temp),
                        minTemp: this.computeCelsiusFromKelvin(result.main.temp_min),
                        maxTemp: this.computeCelsiusFromKelvin(result.main.temp_max),
                        description: result.weather[0].description
                    }
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render(){
        const { error, isLoaded, data } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                    <div className="App">
                    <Weather data={data} />
                    </div>
                );
        }
    }
}

export default App;
