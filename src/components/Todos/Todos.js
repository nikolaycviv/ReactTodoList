import React, { Component } from 'react';
import './Todos.css';

class Todos extends Component {

  renderTask = () => {
    const { task, done } = this.props.todo;
    const taskStyle = {
      color: done ? "green" : "red",
      cursor: "pointer"
    }
    return (
      <span style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}> {task}</span>
    )
  }

  render() {
    return (
      <div className="Todos">
        {this.renderTask()}
      </div>
    );
  }
}

export default Todos;
