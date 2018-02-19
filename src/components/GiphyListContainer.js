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
			searchValue: '',
			fetchSearch: false,
			trendingPagination: {},
			searchPagination: {}
		};
		this.setGiphyList = this._setGiphyList.bind(this);
		this.fetchGifs = this._fetchGifs.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.searchValue !== this.state.searchValue) {
			this.setState({
				searchValue: nextProps.searchValue,
				searchPagination: {},
				giphyList: []
			}, ()=> {
				this._fetchGifs();
			});
		}
	}

	_fetchGifs() {
		let searchValue = this.state.searchValue;
		this._setLoadingState();
		if (searchValue) {
			this._fetchSearch(searchValue);
		} else {
			this._fetchTrending();
		}
	}

	_fetchTrending() {
		api.fetchTrending(this.state.trendingPagination)
			.then((response)=> {
				this.setGiphyList(response.gifListData, response.paginationData, true);
			});
	}

	_fetchSearch(searchValue) {
		api.searchGiphy(searchValue, this.state.searchPagination)
			.then((response)=> {
				this.setGiphyList(response.gifListData, response.paginationData, false);
			});
	}

	_setGiphyList(list, pagination, isTrendingSearch) {
		const key = isTrendingSearch ? 'trendingPagination' : 'searchPagination';
		this.setState({
			loading: false,
			giphyList: this.state.giphyList.concat(list),
			[key]: pagination
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
			giphyList
		} = this.state;
		const {selectGif, isAutoPlayActive} = this.props;
		return (
			<div>
				<GiphyList
					giphyList={giphyList}
					loading={loading}
					selectGif={selectGif}
					isAutoPlayActive={isAutoPlayActive}
					loadMore={this.fetchGifs} />
			</div>
		)
	}
}

export default GiphyListContainer;