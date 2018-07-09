import React, { Component } from 'react';

class Qmark extends Component {

  state = {value: ''};

  handleChange = (event)=> {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state.value);
    this.props.addTodo(this.state.value);
    this.setState({value: ''});

  }

  render() {
    return (
      <form
        className="Qmark"
        onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value= {this.state.value}
            onChange= {this.handleChange}
            placeholder="What needs to be done?"
          />
        </label>
      </form>
    )
  }
}

export default Qmark;
