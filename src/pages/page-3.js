import React from 'react';

export default class Stateful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <p>Count: {this.state.counter}
        <button onClick={this.increment}>+</button>
      </p>
    );
  }
}