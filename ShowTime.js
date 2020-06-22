import React from 'react';
class ShowTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time2: new Date().toLocaleString()
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
      time2: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <p className="App-clock">
        The time is {this.state.time2}.
      </p>
    );
  }
}
export default ShowTime;