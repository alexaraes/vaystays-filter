import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';
import PropertiesList from './components/PropertiesList';

import './styles/app.css';
import results from './results.json';
const data = results.data;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			properties: data
		}
	}

	handleTermChange(term) {
		console.log(term);
	}

	render() {
		return (
			<div className="greeting">
				<SearchBar onTermChange={this.handleTermChange} />
				<PropertiesList properties={this.state.properties} />
			</div>
		);
	}
}

// data.sort(function (a, b) {
//   return b.user_rating - a.user_rating || b.tiebreaker_sort - a.tiebreaker_sort;
// });

// console.log(data);

// var i;
// for (i = 0; i < data.length; i++) {
//     console.log("tie breaker:", data[i].tiebreaker_sort, "user rating:", data[i].user_rating);
// }

// data.sort(function (a, b) {
//   return b.sleeps_max - a.sleeps_max || b.sleeps_comfortably - a.sleeps_comfortably || b.tiebreaker_sort - a.tiebreaker_sort;
// });

// for (i = 0; i < data.length; i++) {
//     console.log(data[i].title, "sleeps max:", data[i].sleeps_max, "sleeps comfortably:", data[i].sleeps_comfortably, "tie breaker:", data[i].tiebreaker_sort,);
// }

ReactDOM.render(<App />, document.getElementById('app'));