import React from 'react';

class SearchBar extends React.Component {
  changeOption(e) {
  	console.log(e);
    var val = e.target.value;
    this.props.changeOption(val);
  }
  render() {
    return (
      <div>
        <div className="filter">
          <label className="select-label">Filter By: </label>
          <select className="filter" onChange={this.changeOption.bind(this)}>
          	<option value='all'>All</option>
          	<option value='user_rating'>User Rating</option>
          	<option value='sleeps_max'>Sleeps Max</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SearchBar;