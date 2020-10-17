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
            items: []
        };
    }

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${data.API_KEY}`)
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                    <div className="App">
                    <Weather />
                    <p>items : {items} </p>
                    </div>
                );
        }
    }
}

export default App;
