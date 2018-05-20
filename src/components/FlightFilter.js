import React from 'react';

export default class FlightFilter extends React.Component {
    state= {
        priceToggled: false,
        priceMax: 700
        
      }

    onChange = property => e => {
        const newState = {};
    
        newState[property] = e.target.value;

      
        this.setState(newState, ()=> {
            this.props.changeFilterValue({...this.state})
        })
        
   }

      onChangeCheckbox = property => e => {
        const newState = {};
    
        newState[property] = e.target.checked;
     
    
        this.setState(newState, ()=> {
            this.props.changeFilterValue({...this.state})
        })
      }

    render() {
        return (
            <div>
                <input type='checkbox' checked={this.state.priceToggled} onChange={this.onChangeCheckbox('priceToggled')}/>
                <input type='number' value={this.state.priceMax} onChange={this.onChange('priceMax')}/>
            </div>
        )
    }

}