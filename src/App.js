import React, { Component } from 'react';
import './App.css';
import './Qmark.css';
import './List.css';
import './Tools.css';
import Qmark from './Qmark.js';
import List from './List.js';
import Tools from './Tools.js';
import {VIEW_ALL, VIEW_ACTIVE, VIEW_COMPLETED} from './globals.js';

class App extends Component {

  state= {
    todos: [],
    completed:[],
    view: VIEW_ALL,
  }

  changeView= (newView) =>{
    this.setState({view: newView});
  }

  clearLists= () =>{
    this.setState({
      completed: [],
      todos: [],
      view: VIEW_ALL,
    });
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

  componentDidMount(){
    const state= localStorage.getItem("state");
    console.log(state);
    this.setState(JSON.parse(state));
  }

  componentDidUpdate(){
    localStorage.setItem("state", JSON.stringify(this.state));
    console.log(localStorage.getItem("state"));
  }

  render() {
    const { view } = this.state;

    return (
      <div className="App">
        <header className="header">
          <h1 className="title">todos</h1>
        </header>

        <Qmark
          addTodo = {this.addTodo}
        />

        {view===VIEW_ALL && <p className="p">Active</p>}
        {(view === VIEW_ACTIVE || view === VIEW_ALL) &&
          <List
            items={this.state.todos}
            onItemClicked= {this.doneTodo}
            label="mark as done"
          />
        }

        {view===VIEW_ALL && <p className="p">Completed</p>}
        {(view === VIEW_COMPLETED || view === VIEW_ALL) &&
          <List
            items={this.state.completed}
            onItemClicked= {this.notDoneTodo}
            label= "oh"
          />
        }

        <div className= "App">
          <Tools
            view={this.state.view}
            changeView={this.changeView}
            lengthTodos= {this.state.todos.length}
            lengthCompleted= {this.state.completed.length}
            clearLists= {this.clearLists}
          />
        </div>

      </div>
    );}
}

export default App;
