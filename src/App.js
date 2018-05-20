import React, { Component } from 'react';
import SearchView from '././components/SearchView';
import FlightsView from '././components/FlightsView';

class App extends Component {
  state = {
    flightData: {},
    view: 'search'
  }

  onSearchSubmit = (flightData)=> {
    this.setState({
      flightData,
      view: 'flights'
    })
  }
    
    render() {
    return (
      <div className="App">
      {
        this.state.view === 'search' ? (<SearchView onAppSubmit={this.onSearchSubmit}/>) : <FlightsView flightData={this.state.flightData}/>
      }
        
      </div>
    );
  }
}

export default App;
