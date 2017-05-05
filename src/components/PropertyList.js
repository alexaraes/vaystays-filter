import React from 'react';
import PropertyItem from './PropertyItem';
import SearchBar from './SearchBar';

class PropertyList extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
		data: this.props.data.sort(function (a, b) {
		  return b.tiebreaker_sort - a.tiebreaker_sort;
		}),
  	}

  	this.filterList = this.filterList.bind(this);
  }

  filterList(val) {
  	var data = this.state.data;
  	if(val === "user_rating") {
  		this.setState({data: data.sort(function (a, b) {
		  return b.user_rating - a.user_rating || b.tiebreaker_sort - a.tiebreaker_sort;
		})});
  	}
  	else if(val === "sleeps_max") {
  		this.setState({data: data.sort(function (a, b) {
		  return b.sleeps_max - a.sleeps_max || b.sleeps_comfortably - a.sleeps_comfortably || b.tiebreaker_sort - a.tiebreaker_sort;
		})});
  	}
  	else {
  		this.setState({data: data.sort(function (a, b) {
		  return b.tiebreaker_sort - a.tiebreaker_sort;
		})});
  	}
  }

  render() {
  	// declare various crap
    var filteredItems = this.state.data;
    
    return (
      <div className="property-list">
        <SearchBar
            data={this.state.data}
            changeOption={this.filterList}/>
        <div className="filter-form">
          <PropertyItem data={filteredItems} />
        </div>
      </div>
    )
  }
}

export default PropertyList;