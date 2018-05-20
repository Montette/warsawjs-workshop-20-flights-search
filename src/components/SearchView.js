import React from 'react';

class SearchView extends React.Component {
    state = {
        fromValue: 'WAW',
        toValue: 'ATL',
        departValue: '',
        returnValue: '',
        empty: false
    }

    onFromChange = (event) => {
        this.setState({fromValue: event.target.value})
    }

    onToChange = (event) => {
        this.setState({toValue: event.target.value})
    }

    onDepartChange = (event) => {
        this.setState({departValue: event.target.value})
    }

    onReturnChange = (event) => {
        this.setState({returnValue: event.target.value})
    }

    onSubmit =(event)=> {
        event.preventDefault();
        console.log(this.state);
        if(this.state.toValue === '' || this.state.fromValue === ''|| this.state.departValue === '' || this.state.returnValue === '') {
            console.log('empty');
            this.setState({
                empty: true
            })
            return
        } else {
            this.setState({
                empty: false
            })
        }
       this.props.onAppSubmit({...this.state})
    }

    render() {
        const info = 'You have to fill all inputs';
        return (
           <div>
            <form onSubmit={this.onSubmit}>
                <label>
                    <strong>From</strong>
                    <select value={this.state.fromValue} onChange={this.onFromChange}>
                        <option value="WAW">WAW</option>
                        <option value="ATL">ATL</option>
                    </select>
                </label>
                <label>
                    <strong>To</strong>
                    <select value={this.state.toValue} onChange={this.onToChange}>
                        <option value="ATL">ATL</option>
                        <option value="WAW">WAW</option>
                    </select>
                </label>
                <label>
                    <strong>Depart</strong>
                    <input
                        type="date"
                        value={this.state.departValue}
                        onChange={this.onDepartChange}/>
                </label>
                <label>
                    <strong>Return</strong>
                    <input
                        type="date"
                        value={this.state.returnValue}
                        onChange={this.onReturnChange}/>
                </label>
                <input type="submit" value="submit" />
            </form>
            {this.state.empty? info:null }
            </div>
          

        )
    }
}

export default SearchView;