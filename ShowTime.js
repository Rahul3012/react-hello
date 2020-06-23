import React from 'react';
class ShowTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time2: new Date()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time2: new Date()
    });
  }
  render() {
    return (
      <p className="App-clock">
        The time is {this.state.time2.toLocaleString()}.
      </p>
    );
  }
}
export default ShowTime;