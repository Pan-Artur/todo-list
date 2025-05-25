import { Component } from "react";

import { StyledTimer } from "./StyledTimer";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => { 
        let { days, hours, minutes, seconds } = prevState;

        seconds += 1;

        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }

        if (minutes >= 60) {
            minutes = 0;
            hours += 1;
        } 

        if (hours >= 24) {
            hours = 0;
            days += 1;
        }

        return { days, hours, minutes, seconds };
       });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  formatTime = (time) => time < 10 ? `0${time}` : time;

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <StyledTimer>
        <p>{this.formatTime(days)}:
        {this.formatTime(hours)}:
        {this.formatTime(minutes)}:
        {this.formatTime(seconds)}</p>
      </StyledTimer>
    );
  }
}
