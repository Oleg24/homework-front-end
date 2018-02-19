import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import GifModal from './components/GifModal';
import GiphyListContainer from './components/GiphyListContainer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			giphyList: [],
			loading: false,
			openGifModal: false,
			gifInFocus: {},
			fetchTrending: true,
			pagination: {
				hasMore: true
			}
		};
		this.handleUserSearch = this._handleUserSearch.bind(this);
		// this.fetchTrending = this._fetchTrending.bind(this);
		// this.fetchSearch = this._fetchSearch.bind(this);
		this.selectGif = this._selectGif.bind(this);
		// this.setGiphyList = this._setGiphyList.bind(this);
		// this.setLoadingState = this._setLoadingState.bind(this);
		this.toggleModal = this._toggleModal.bind(this);
	}

	componentDidMount() {
		// this.fetchTrending();
	}

	_handleUserSearch(value) {
		this.setState({
			searchValue: value === "" ? null : value
		});
		// if (value === "") {
		// 	this.fetchTrending();
		// } else {
		// 	this.fetchSearch(value);
		// }
	}

	// _fetchTrending() {
	// 	console.log('called')
	// 	this.setLoadingState();
	// 	api.fetchTrending()
	// 		.then((response)=> {
	// 			this.setGiphyList(response.gifListData, response.paginationData);
	// 		});
	// }
	//
	// _fetchSearch(searchInput) {
	// 	this.setLoadingState();
	// 	api.searchGiphy(searchInput)
	// 		.then((response)=> {
	// 			this.setGiphyList(response.gifListData, response.paginationData);
	// 		});
	// }
	//
	// _setGiphyList(list, pagination) {
	// 	this.setState({
	// 		loading: false,
	// 		giphyList: list,
	// 		pagination: pagination
	// 	});
	// }
	//
	// _setLoadingState() {
	// 	this.setState({
	// 		loading: !this.state.loading
	// 	});
	// }
	//
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
			loading,
			openGifModal,
			gifInFocus,
			fetchTrending,
			searchValue,
			pagination
		} = this.state;
		return (
			<div className="App">
				<Header title="Eaze" />
				<SearchBar handleSearch={this.handleUserSearch} />
				<GifModal open={openGifModal} gif={gifInFocus} toggleModal={this.toggleModal} />
				<GiphyListContainer selectGif={this.selectGif} searchValue={searchValue}/>
			</div>
		);
	}
}

export default App;
