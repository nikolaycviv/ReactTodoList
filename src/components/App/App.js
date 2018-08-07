import React, { Component } from 'react';
import Todos from "../Todos/Todos";
import './App.css';

class App extends Component {
  state = {
    inputValue: "",
    todos: [
      { task: "да сготвя", done: false },
      { task: "да изчистя", done: false },
      { task: "да напазарувам", done: true }
    ]
  }

  changeInput = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    let todos = this.state.todos;
    todos.push({ task: this.state.inputValue, done: false });
    this.setState({ inputValue: "", todos: todos });
  }

  toggleTask = (task) => {
    const foundTodo = this.state.todos.filter(todo => todo.task === task)[0];
    foundTodo.done = !foundTodo.done;
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Your Todo List!</h1>
        <form onSubmit={this.onSubmit} className="form" action="">
          <input onChange={this.changeInput} type="text" placeholder="Enter your next todo in the list" />
          <button className="btn">Submit</button>
        </form>
        {this.state.todos.map((todo, index) => <Todos todo={todo} key={index} toggleTask={this.toggleTask} />)}
      </div>
    );
  }
}

export default App;
