import axios from 'axios';
import apiVO from '../common/api-vo';

const api_key = "3o8JIonp13D6yH3cKYTSAn8EDpE2aine";
const host = "http://api.giphy.com";

const api = {
	fetchTrending: ()=> {
		const trendingAPI = "/v1/gifs/trending";
		return axios.get(host + trendingAPI, {
				params: {
					api_key: api_key
				}
			})
			.then((response)=> {
				console.log(response);
				return apiVO.mapGiphyResponse(response.data);
			})
			.catch((error)=> {
				console.log('error', error);
				throw error;
			});
	},
	searchGiphy: (searchValue)=> {
		const builtSearchValue = apiVO.buildSearchValue(searchValue);
		const searchAPI = "/v1/gifs/search";
		return axios.get(host + searchAPI, {
				params: {
					api_key: api_key,
					q: builtSearchValue
				}
			})
			.then((response)=> {
				console.log(response);
				return apiVO.mapGiphyResponse(response.data);
			})
			.catch((error)=> {
				console.log('search error', error);
				throw error;
			});
	}
};


export default api;