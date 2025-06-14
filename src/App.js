import "./App.css";

import { Component } from "react";

import { Timer } from "./components/Timer/Timer";
import { OptimizedSum } from "./components/OptimizedSum/OptimizedSum";
import { Info } from "./components/Info/Info";
import { TodoEditor } from "./components/TodoEditor/TodoEditor";
import { Filter } from "./components/Filter/Filter";
import { TodoList } from "./components/TodoList/TodoList";

import initialTodos from "./todo.json";

export class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
    nextId: initialTodos.length + 1,
  };

  createTask = (text) => {
    if (text.trim() === "") {
      return;
    }

    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        { id: `id-${prevState.nextId}`, text, completed: false },
      ],
      nextId: prevState.nextId + 1,
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  // toggleTodo = (id) => {
  //   this.setState(prevState => {
  //     const updatedTodos = prevState.todos.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todo, completed: !todo.completed };
  //       }

  //       return todo;
  //     });

  //     return { todos: updatedTodos };
  //   });
  // }

  toggleTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  }

  deleteTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  }

  loadTodos = (todos) => {
    this.setState({
      todos, 
      nextId: todos.length + 1
    });
  }

  render() {
    const { todos, filter } = this.state;

    const filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Список завдань</h1>
        <Timer />
        <OptimizedSum />
        <section>
          <div>
            <TodoEditor onCreateTask={this.createTask} />
            <Filter value={filter} onChange={this.handleFilterChange} />
          </div>
          <div>
            <Info tasks={todos} />
            <TodoList tasks={filteredTodos} onToggle={this.toggleTodo} onDelete={this.deleteTodo} onLoad={this.loadTodos} />
          </div>
        </section>
      </div>
    );
  }
}
