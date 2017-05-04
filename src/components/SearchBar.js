import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { sortBy: '' }
	}

	onFilterChange(term) {
		this.setState({term});
    	this.props.onTermChange(term);
	}

	render() {
		return (
			<div onClick={event => this.onFilterChange(event.target.text)}>
				<span>Sort By: </span>
				<a href="#">User Rating</a>
				<a href="#">Sleeps Maximum</a>
				<a href="#">Sleeps Comfortably</a>
			</div>
		);
	}
}

export default SearchBar;