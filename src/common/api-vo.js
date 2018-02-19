const apiViewObject = {
	mapGiphyResponse: (apiResponse)=> {
		return apiResponse.data.map((gif)=> {
			return {
				previewUrl: gif.images.looping.mp4,
				width: gif.images.preview.width,
				height: gif.images.preview.height,
				userName: (gif.user && gif.user.username) ? gif.user.username : null,
				avatar: (gif.user && gif.user.username) ? gif.user.avatar_url : null,
				twitterHandle: (gif.user && gif.user.username) ? gif.user.twitter.split('/') : null,
				rating: gif.rating,
				title: gif.title,
				embedUrl: gif.embed_url,
				url: gif.url,
				id: gif.id
			}
		});
	},
	buildSearchValue: (searchValue)=> {
		return searchValue.split(' ').join('+');
	}
};

export default apiViewObject;