import React from 'react';
import Weather from './app_component/weather.component'
import Form from './app_component/form.component'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.min.css'
import data from './secrets/secrets.json'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            data: {
                city: null,
                country: null,
                avgTemp: null,
                minTemp: null,
                maxTemp: null,
                description: "Loading...",
            },
            icon: null
        };
        this.weatherIcons = {
            thunderstorm: "wi-thunderstorm",
            drizzle: "wi-sleet",
            rain: "wi-storm-showers",
            snow: "wi-snow",
            atmosphere: "wi-fog",
            clear: "wi-day-sunny",
            clouds: "wi-day-fog"
        };
    }

    computeCelsiusFromKelvin(temperature) {
        temperature-=273.15;
        return Math.round(temperature);
    }

    getWeatherIcon(icons, rangeID) {
        switch(true) {
            case rangeID>=200 && rangeID<=232:
                this.setState({icon: icons.thunderstorm});
                break;
            case rangeID>=300 && rangeID<=321:
                this.setState({icon: icons.drizzle});
                break;
            case rangeID>=500 && rangeID<=531:
                this.setState({icon: icons.rain});
                break;
            case rangeID>=600 && rangeID<=622:
                this.setState({icon: icons.snow});
                break;
            case rangeID>=700 && rangeID<=781:
                this.setState({icon: icons.atmosphere});
                break;
            case rangeID===800:
                this.setState({icon: icons.clear});
                break;
            case rangeID>=801 && rangeID<=804:
                this.setState({icon: icons.clouds});
                break;
            default:
                this.setState({icon: icons.clouds});
        }
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
                this.getWeatherIcon(this.weatherIcons, result.weather[0].id);
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
        const { error, isLoaded, data, icon } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                    <div className="App">
                        <Form />
                        <Weather data={data} icon={icon}/>
                    </div>
                );
        }
    }
}

export default App;
