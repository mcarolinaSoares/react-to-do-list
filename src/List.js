import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {

static propTypes= {
  items: PropTypes.array.isRequired,
  onItemClicked: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

  render() {
    return(
      <ul>
        {this.props.items.map((todo, i) => (
          <li key={i}>
            <button onClick= {() => this.props.onItemClicked(i)}>
              {this.props.label}
            </button>
            {todo}

          </li>
        ))}
      </ul>

    )
  }

}

export default List;
