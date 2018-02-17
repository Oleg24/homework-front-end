import React, {Component} from 'react';
import './App.css';
import api from './common/api-service';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GiphyList from './components/GiphyList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			giphyList: []
		};
		this.handleUserSearch = this._handleUserSearch.bind(this);
		this.fetchTrending = this._fetchTrending.bind(this);
		this.fetchSearch = this._fetchSearch.bind(this);
		this.setGiphyList = this._setGiphyList.bind(this);
	}

	componentDidMount() {
		this.fetchTrending();
	}

	_handleUserSearch(value) {
		if (value === "") {
			this.fetchTrending();
		} else {
			this.fetchSearch(value);
		}
	}

	_fetchTrending() {
		api.fetchTrending()
			.then((response)=> {
				this.setGiphyList(response);
			});
	}

	_fetchSearch(searchInput) {
		api.searchGiphy(searchInput)
			.then((response)=> {
				this.setGiphyList(response);
			});
	}

	_setGiphyList(list) {
		this.setState({
			giphyList: list
		});
	}

	render() {
		const {giphyList} = this.state;
		return (
			<div className="App">
				<Header title="Eaze" />
				<SearchBar handleSearch={this.handleUserSearch} />
				<GiphyList giphyList={giphyList} />
			</div>
		);
	}
}

export default App;
