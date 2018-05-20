import React from 'react';
import Flight from './Flight';
import FlightFilter from './FlightFilter';

class FlightsView extends React.Component {

    state = {
        flights: [],
        priceMax: 100,
        flightFetching: false
    }

    async componentDidMount() {
        this.setState({
            flightFetching: true
        })
        const url = 'https://warsawjs-flights-api.herokuapp.com/flights';
        const {fromValue, toValue, departValue, returnValue} = this.props.flightData;
        const url2 = `${url}/${departValue}/${returnValue}/${fromValue}/${toValue}`;
        const flights = await fetch(url2)
        .then((res) => res.json());

        this.setState({flights, flightFetching: false})
    }

    changeFilterValue = (values)=> {
        this.setState(values)
    }

   

    render() {

        const flightsMaped = this.state.flights
        .filter(flight => 
        !this.state.priceToggled ||    
        flight.price < +this.state.priceMax)
       .map(flight => (<Flight key={flight.id} flight={flight}/>))
        return (
            <div>
            {this.state.flightFetching ? <p>Loading...</p>: null}
                <FlightFilter changeFilterValue={this.changeFilterValue} />
                {flightsMaped}
            </div>
        )
    }
}

export default FlightsView;