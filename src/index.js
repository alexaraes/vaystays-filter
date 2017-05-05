import React from 'react';
import ReactDOM from 'react-dom';

// import SearchBar from './components/SearchBar';
import PropertyList from './components/PropertyList';

import './styles/styles.css';
import results from './results.json';
const data = results.data;

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<PropertyList data={data} />
			</div>
		);
	}
}

ReactDOM.render(<App />,
  document.getElementById('app'));