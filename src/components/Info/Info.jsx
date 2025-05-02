import { Component } from "react";

import { StyledInfo } from "./StyledInfo";

export class Info extends Component {
  toCountTasks = (tasks) => tasks.length;

  toCountCompletedTasks = (tasks) => tasks.filter(task => task.completed).length;

  render() {
    const { tasks } = this.props;

    return (
      <StyledInfo>
        <li>
          <p>Всього завдань: {this.toCountTasks(tasks)}</p>
        </li>
        <li>
          <p>Виконано: {this.toCountCompletedTasks(tasks)}</p>
        </li>
      </StyledInfo>
    );
  }
}
