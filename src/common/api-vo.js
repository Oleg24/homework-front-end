const apiViewObject = {
	mapGiphyResponse: (apiResponse)=> {
		console.log('trending api response', apiResponse)
		return apiResponse.data.map((gif)=> {
			return {
				previewUrl: gif.images.looping.mp4,
				width: gif.images.preview.width,
				height: gif.images.preview.height,
				id: gif.id
			}
		});
	},
	buildSearchValue: (searchValue)=> {
		return searchValue.split(' ').join('+');
	}
};

export default apiViewObject;