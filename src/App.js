import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Todos from './components/Todos';

class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then((response) => {
                return response.json()
                    .then((data) => {
                        return this.setState({ todos: data });
                    });
            });
    }

    // Toggle Complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    }

    // Delete Todo
    delTodo = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // "Content-Type": "application/x-www-form-urlencoded",
            }
        })
            .then((res) => {
                return this.setState({
                    todos: [ ...this.state.todos.filter((todo) => {
                        return todo.id !== id;
                    }) ]
                });
            });
    }

    // Add Todo
    addTodo = (title) => {
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                userId: 1,
                title: title,
                completed: false
            })
        }).then((response) => {
            return response.json();
        })
            .then((data) => {
                return this.setState({ todos: [ ...this.state.todos, data ] });
            });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={(props) => {
                            return <React.Fragment>
                                <AddTodo addTodo={this.addTodo} />
                                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                            </React.Fragment>;
                        }
                        } />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
