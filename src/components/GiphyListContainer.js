import React, {Component} from 'react';
import api from '../common/api-service';
import GiphyList from './GiphyList';
import Loader from './Loader';

class GiphyListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			giphyList: [],
			loading: false,
			fetchTrending: true,
			pagination: {}
		};
		this.fetchTrending = this._fetchTrending.bind(this);
		this.fetchSearch = this._fetchSearch.bind(this);
		this.setGiphyList = this._setGiphyList.bind(this);
		this.setLoadingState = this._setLoadingState.bind(this);
	}

	componentDidUpdate(p) {
		// console.log('props', p);
	}

	_fetchTrending() {
		this.setLoadingState();
		api.fetchTrending(this.state.pagination)
			.then((response)=> {
				this.setGiphyList(response.gifListData, response.paginationData);
			});
	}

	_fetchSearch(searchInput) {
		this.setLoadingState();
		api.searchGiphy(searchInput)
			.then((response)=> {
				this.setGiphyList(response.gifListData, response.paginationData);
			});
	}

	_setGiphyList(list, pagination) {
		this.setState({
			loading: false,
			giphyList: this.state.giphyList.concat(list),
			pagination: pagination
		});
	}

	_setLoadingState() {
		this.setState({
			loading: !this.state.loading
		});
	}

	render() {
		const {
			loading,
			fetchTrending,
			giphyList
		} = this.state;
		const {selectGif} = this.props;
		return (
			<div>
				<GiphyList
					giphyList={giphyList}
					selectGiphy={this.selectGif}
					loading={loading}
					selectGif={selectGif}
					loadMore={fetchTrending ? this.fetchTrending : this.fetchSearch} />
			</div>
		)
	}
}

export default GiphyListContainer;