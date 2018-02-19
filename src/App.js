import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GifModal from './components/GifModal';
import GiphyListContainer from './components/GiphyListContainer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openGifModal: false,
			gifInFocus: {},
			isAutoPlayActive: true,
			searchValue: ""
		};
		this.handleUserSearch = this._handleUserSearch.bind(this);
		this.selectGif = this._selectGif.bind(this);
		this.toggleModal = this._toggleModal.bind(this);
		this.toggleAutoPlay = this._toggleAutoPlay.bind(this);
	}

	_handleUserSearch(value) {
		this.setState({
			searchValue: value !== "" ? value : ""
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

	_toggleAutoPlay() {
		this.setState({
			isAutoPlayActive: !this.state.isAutoPlayActive
		});
	}

	render() {
		const {
			openGifModal,
			gifInFocus,
			searchValue,
			isAutoPlayActive
		} = this.state;
		return (
			<div className="App">
				<Header title="Eaze" />
				<SearchBar
					handleSearch={this.handleUserSearch}
					isAutoPlayActive={isAutoPlayActive}
					toggleAutoPlay={this.toggleAutoPlay}
				/>
				<GifModal open={openGifModal} gif={gifInFocus} toggleModal={this.toggleModal} />
				<GiphyListContainer
					selectGif={this.selectGif}
					searchValue={searchValue}
					isAutoPlayActive={isAutoPlayActive}
				/>
			</div>
		);
	}
}

export default App;
