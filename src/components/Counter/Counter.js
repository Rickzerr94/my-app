import { Component } from 'react';

class Counter extends Component {
    state = { value: 0 };

    incrementValue = () => {
        this.setState((state) => ({ value : state.value + 1}));
    };

    render() {
        return (
            <div>
                <h3>Voted : {this.state.value}</h3>
                <button onClick={this.incrementValue}>Vote</button>
            </div>
        )
    }
}

export default Counter;