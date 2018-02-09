const apiViewObject = {
	mapGiphyResponse: (apiResponse)=> {
		console.log(apiResponse)
		return apiResponse.data.map((gif)=> {
			return {
				link: gif.url,
				previewUrl: gif.images.preview.mp4,
				width: gif.images.preview.width,
				height: gif.images.preview.height
			}
		});
	}
};

export default apiViewObject;