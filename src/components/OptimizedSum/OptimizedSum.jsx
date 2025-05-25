import { Component } from "react";

import { StyledOptimizedSum } from "./StyledOptimizedSum";

export class OptimizedSum extends Component {
  constructor(props) {
    super(props);
    this.state = { value1: 0, value2: 0 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.value1 + this.state.value2 !==
      nextState.value1 + nextState.value2
    );
  }

  onChangeValue1 = (e) => {
    this.setState({ value1: Number(e.target.value) });
  };

  onChangeValue2 = (e) => {
    this.setState({ value2: Number(e.target.value) });
  };

  render() {
    const { value1, value2 } = this.state;
    const sum = value1 + value2;

    return (
      <StyledOptimizedSum>
        <h2>Знаходження суми:</h2>
        <div className="sum-container">
          <input type="number" value={value1} onChange={this.onChangeValue1} />
          <span>+</span>
          <input type="number" value={value2} onChange={this.onChangeValue2} />
          <span>=</span>
          <span className="result">{sum}</span>
        </div>
      </StyledOptimizedSum>
    );
  }
}
