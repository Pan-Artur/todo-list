import { Component } from "react";

import { StyledTodoList } from "./StyledTodoList";

export class TodoList extends Component {
    render() {
        const { tasks, onToggle, onDelete } = this.props;

        return (
            <StyledTodoList>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox" onChange={() => onToggle(task.id)} />
                        <p>{task.text}</p>
                        <button type="button" onClick={() => onDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </StyledTodoList>
        );
    }
}