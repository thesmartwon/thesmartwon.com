import React from 'react';


export default class RetirementCalc extends React.Component {
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
        All you have to do is save 286672 over a 10 year period. That's the equivalent of buying a starter home and paying off the mortgage in some areas. Yet, through the magic of investing, your money nearly triples to 763750 and you can safely withdraw 26731 per year, which will meet your $24k of living expenses.
      </p>
    );
  }
}
