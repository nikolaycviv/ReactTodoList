import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => {
            return <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo} />;
        });
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
};

export default Todos;
