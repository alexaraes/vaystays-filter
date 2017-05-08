import React from 'react';
import PropertyItem from './PropertyItem';
import SearchBar from './SearchBar';

const tieBreaker = (a, b) => b.tiebreaker_sort - a.tiebreaker_sort;
const userRating = (a,b) => b.user_rating - a.user_rating || tieBreaker(a, b);
const sleepsMax = (a, b) => b.sleeps_max - a.sleeps_max || b.sleeps_comfortably - a.sleeps_comfortably || tieBreaker(a, b);

var maxBedsArr = [];

class PropertyList extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
		data: this.props.data.sort(tieBreaker),
  	}

  	this.returnFilterState = this.returnFilterState.bind(this);
  	this.filterList = this.filterList.bind(this);
  	this.searchBeds = this.searchBeds.bind(this);
  }

	returnFilterState(val) {
		this.setState({
			data: this.state.data.sort(this.filterList(val))
		})
	}

	filterList(val) {
		switch(val) {
			case "user_rating":
				return userRating;
			case "sleeps_max":
				return sleepsMax;
			default:
				return tieBreaker;
		}
	}

	searchBeds(val) {
		var data = this.state.data;
		for (var i = 0; i < data.length; i++) {
			if(data[i].sleeps_max >= val) {
				maxBedsArr.push(data[i]);
			}
		}
		this.setState({data: maxBedsArr});
	}

	render() {
		return (
			<div className="property-list">
				<SearchBar
				data={this.state.data}
				changeOption={this.returnFilterState}
				searchBeds={this.searchBeds}/>
				<PropertyItem data={this.state.data} />
			</div>
		)
	}
}

export default PropertyList;