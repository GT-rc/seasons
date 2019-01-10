import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    // not required by react, but needed for state
    constructor(props) {
        super(props);  // this line is ALWAYS required by the base class (Component)

        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });  // setState to update the state!  :)
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    componentDidMount() {
        console.log('it worked! Eureka!');
    }

    componentDidUpdate() {
        console.log('it updated!');
    }

    // react requires us to define render!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div><h3>Error: {this.state.errorMessage}</h3></div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div><h3>Hiya buddy! You're at {this.state.lat} degrees Latitude.</h3></div>;
        }

        return <div><h3>Loading...</h3></div>;
    }
}

ReactDOM.render(
    <App />,
    //<SeasonDisplay />
    document.querySelector('#root')
);
