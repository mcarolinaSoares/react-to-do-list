import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {VIEW_ALL, VIEW_ACTIVE, VIEW_COMPLETED} from './globals.js';

class Tools extends Component {

  static propTypes= {
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
    lengthTodos: PropTypes.number.isRequired,
    lengthCompleted: PropTypes.number.isRequired,
    clearLists: PropTypes.func.isRequired,
  };

  render(){
    return(
      <div className="Tools">

        <button
          className={this.props.view === VIEW_ALL? "active" : ""}
          onClick={() => this.props.changeView(VIEW_ALL)}
        >
          All ({this.props.lengthCompleted + this.props.lengthTodos})
        </button>

        <button
          className= {this.props.view === VIEW_COMPLETED? "active" : ""}
          onClick= {() => this.props.changeView(VIEW_COMPLETED)}
        >
          Completed ({this.props.lengthCompleted})
        </button>

        <button
          className= {this.props.view === VIEW_ACTIVE? "active" : ""}
          onClick= {() => this.props.changeView(VIEW_ACTIVE)}
        >
          Active ({this.props.lengthTodos})

        </button>

        <button
          //{/*className= "Tools"*/}
          onClick= {() => this.props.clearLists()}
        >
          Clear All

        </button>

      </div>
    )}
}

export default Tools;
