import axios from 'axios';
import apiVO from '../common/api-vo';

const api_key = "3o8JIonp13D6yH3cKYTSAn8EDpE2aine";
const host = "http://api.giphy.com";

const api = {
	fetchTrending: ()=> {
		const trendingUrl = "/v1/gifs/trending";
		return axios.get(host + trendingUrl, {
				params: {
					api_key: api_key
				}
			})
			.then((response)=> {
				return apiVO.mapGiphyResponse(response.data);
			})
			.catch((error)=> {
				console.log('error', error);
				throw error;
			});
	}
};


export default api;