import React, {Component} from 'react';
import './App.css';
import api from './common/api-service';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GiphyList from './components/GiphyList';
import Loader from './components/Loader';
import GifModal from './components/GifModal';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			giphyList: [],
			loading: false,
			openGifModal: false,
			gifInFocus: {}
		};
		this.handleUserSearch = this._handleUserSearch.bind(this);
		this.fetchTrending = this._fetchTrending.bind(this);
		this.fetchSearch = this._fetchSearch.bind(this);
		this.selectGif = this._selectGif.bind(this);
		this.setGiphyList = this._setGiphyList.bind(this);
		this.setLoadingState = this._setLoadingState.bind(this);
		this.toggleModal = this._toggleModal.bind(this);
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

	_selectGif(gif) {
		this.setState({
			openGifModal: true,
			gifInFocus: gif
		});
	}

	_toggleModal() {
		this.setState({
			openGifModal: !this.state.openGifModal
		});
	}

	render() {
		const {
			giphyList,
			loading,
			openGifModal,
			gifInFocus
		} = this.state;
		return (
			<div className="App">
				<Header title="Eaze" />
				<SearchBar handleSearch={this.handleUserSearch} />
				<p><a href='https://giphy.com/gifs/basketball-sport-xThtav6PFLh0M8VOBa'>via GIPHY</a></p>
				<Loader loading={loading} />
				<GifModal open={openGifModal} gif={gifInFocus} toggleModal={this.toggleModal} />
				<GiphyList giphyList={giphyList} selectGiphy={this.selectGif} />
			</div>
		);
	}
}

export default App;
