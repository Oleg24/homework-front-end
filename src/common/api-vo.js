const apiViewObject = {
	mapGiphyResponse: (apiResponse)=> {
		return {
			gifListData: apiResponse.data.map((gif)=> {
				return {
					previewUrl: gif.images.looping.mp4,
					previewImage: gif.images.original_still.url,
					width: parseInt(gif.images.preview.width),
					height: parseInt(gif.images.preview.height),
					userName: (gif.user && gif.user.username) ? gif.user.username : null,
					avatar: (gif.user && gif.user.username) ? gif.user.avatar_url : null,
					twitterHandle: (gif.user && gif.user.username) ? gif.user.twitter : null,
					rating: gif.rating,
					title: gif.title,
					embedUrl: gif.embed_url,
					url: gif.url,
					id: gif.id
				}
			}),
			paginationData: {
				hasMore: (apiResponse.pagination.offset + apiResponse.pagination.count) < apiResponse.pagination.total_count,
				offset: apiResponse.pagination.offset + apiResponse.pagination.count + 2
			}
		}
	},
	buildSearchValue: (searchValue)=> {
		return searchValue.split(' ').join('+');
	}
};

export default apiViewObject;