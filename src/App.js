import React, {Component} from 'react';
import './App.css';
import api from './common/api-service';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GiphyList from './components/GiphyList';
import Loader from './components/Loader';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			giphyList: [],
			loading: false
		};
		this.handleUserSearch = this._handleUserSearch.bind(this);
		this.fetchTrending = this._fetchTrending.bind(this);
		this.fetchSearch = this._fetchSearch.bind(this);
		this.setGiphyList = this._setGiphyList.bind(this);
		this.setLoadingState = this._setLoadingState.bind(this);
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
		this.setLoadingState();
		api.fetchTrending()
			.then((response)=> {
				this.setGiphyList(response);
			});
	}

	_fetchSearch(searchInput) {
		this.setLoadingState();
		api.searchGiphy(searchInput)
			.then((response)=> {
				this.setGiphyList(response);
			});
	}

	_setGiphyList(list) {
		this.setState({
			loading: false,
			giphyList: list
		});
	}

	_setLoadingState() {
		this.setState({
			loading: !this.state.loading
		});
	}

	render() {
		const {giphyList, loading} = this.state;
		console.log(loading);
		return (
			<div className="App">
				<Header title="Eaze" />
				<SearchBar handleSearch={this.handleUserSearch} />
				<Loader loading={loading} />
				<GiphyList giphyList={giphyList} />
			</div>
		);
	}
}

export default App;
