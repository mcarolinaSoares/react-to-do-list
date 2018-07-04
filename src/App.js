import React, { Component } from 'react';
import './App.css';
import Qmark from './Qmark.js';
import List from './List.js';

class App extends Component {

  state= {
      todos: [],
      completed:[],
  }

addTodo = (todo) => {

  console.log(this.state);
  this.setState({ todos: this.state.todos.concat(todo)});
}

doneTodo = (index) => {

  const todos = this.state.todos;
  const removeTodos = todos.splice(index, 1);

  this.setState({
    completed: this.state.completed.concat(removeTodos),
    todos: todos
  });
}

notDoneTodo = (index) =>{

  const completed = this.state.completed;
  const removeCompleted = completed.splice(index, 1);

  this.setState({
    todos: this.state.todos.concat(removeCompleted),
    completed: completed
  });
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">todos</h1>
        </header>

        <Qmark
          addTodo = {this.addTodo}
        />

        <List
          items={this.state.todos}
          onItemClicked= {this.doneTodo}
          label="mark as done"
        />

        <List
        items={this.state.completed}
        onItemClicked= {this.notDoneTodo}
        label= "oh"
        />

        <div>

        </div>

      </div>
    );
  }
}

export default App;
