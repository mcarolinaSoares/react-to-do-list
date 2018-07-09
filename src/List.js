import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {

  static propTypes= {
    items: PropTypes.array.isRequired,
    onItemClicked: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
  };

  render() {
    return(
      <ul className="List">
        {this.props.items.map((todo, i) => (
          <li key={i}>
            {todo}
            <button
              onClick= {() => this.props.onItemClicked(i)}>
              {this.props.label}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default List;
