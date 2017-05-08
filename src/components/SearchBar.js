import React from 'react';

class SearchBar extends React.Component {
// declaring val in each function cuz scope
  changeOption(e) {
    var val = e.target.value;
    this.props.changeOption(val);
  }

  searchBeds(e) {
  	var val = e.target.value;
  	this.props.searchBeds(val);
  }
  render() {

    return (
      <div>
        <div className="filter">
          <label>Filter By:</label>
          <select className="filter" onChange={this.changeOption.bind(this)}>
          	<option value='default'>Default</option>
          	<option value='user_rating'>User Rating</option>
          	<option value='sleeps_max'>Sleeps Max</option>
          </select>
        </div>
        <div className="filter">
        <label>Minimum Beds:</label>
        	<select className="filter" onChange={this.searchBeds.bind(this)}>
        		<option value="4">4</option>
        		<option value="5">5</option>
        		<option value="6">6</option>
        		<option value="7">7</option>
        		<option value="8">8</option>
        		<option value="9">9</option>
        		<option value="10">10</option>
        	</select>
        </div>
      </div>
    );
  }
}

export default SearchBar;