import React, {Component} from 'react';
import './App.css';
import api from './common/api-service';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GiphyList from './components/GiphyList';

class App extends Component {
	constructor() {
		super();
		this.state = {
			giphyList: []
		};
	}

	componentDidMount() {
		api.fetchTrending()
			.then((response)=> {
				this.setState({
					giphyList: response
				});
			});
	}

	_handleUserSearch() {

	}

	_fetchTrending() {
		api.fetchTrending()
			.then((response)=> {
				this.setState({
					giphyList: response
				});
			});
	}

	render() {
		const {giphyList} = this.state;
		return (
			<div className="App">
				<Header title="Eaze" />
				<SearchBar />
				<GiphyList giphyList={giphyList} />
			</div>
		);
	}
}

export default App;
