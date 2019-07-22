import { h } from 'preact';

export default class Counter extends React.Component {
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