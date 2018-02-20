import React, {Component} from 'react';
import api from '../common/api-service';
import GifList from './GifList';
import Error from './Error';
import PropTypes from 'prop-types';

class GifListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			giphyList: [],
			loading: false,
			searchValue: '',
			fetchSearch: false,
			trendingPagination: {},
			searchPagination: {},
			isError: false
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

	/**
	 * @desc Logic for weather to fetch data from trending or search api
	 * @private
	 */
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
			})
			.catch(()=>{
				this.setState({
					isError: true
				});
			});
	}

	/**
	 * 
	 * @param {String} searchValue
	 * @private
	 */
	_fetchSearch(searchValue) {
		api.searchGiphy(searchValue, this.state.searchPagination)
			.then((response)=> {
				this.setGiphyList(response.gifListData, response.paginationData, false);
			})
			.catch(()=>{
				this.setState({
					isError: true
				});
			});
	}

	/**
	 * @desc sets the gif list data based on api response
	 * @param {Array} list
	 * @param {Object} pagination
	 * @param {Boolean} isTrendingSearch
	 * @private
	 */
	_setGiphyList(list, pagination, isTrendingSearch) {
		const key = isTrendingSearch ? 'trendingPagination' : 'searchPagination';
		this.setState({
			loading: false,
			giphyList: this.state.giphyList.concat(list),
			[key]: pagination
		});
	}

	/**
	 * @desc sets loading state prior to fetching 
	 * @private
	 */
	_setLoadingState() {
		this.setState({
			loading: !this.state.loading,
			isError: false
		});
	}

	render() {
		const {
			loading,
			giphyList,
			isError
		} = this.state;
		const {selectGif, isAutoPlayActive} = this.props;
		return (
			<div>
				{ isError ? <Error/> :
					<GifList
						gifList={giphyList}
						loading={loading}
						selectGif={selectGif}
						isAutoPlayActive={isAutoPlayActive}
						loadMore={this.fetchGifs} />
				}
			</div>
		)
	}
}

GifListContainer.propTypes = {
	selectGif: PropTypes.func.isRequired,
	isAutoPlayActive: PropTypes.bool.isRequired,
	searchValue: PropTypes.string.isRequired
};

export default GifListContainer;