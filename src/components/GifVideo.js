import React from 'react';

const GifVideo = ({
	width,
	height,
	previewUrl
}) => (
	<video autoPlay loop style={{height: height, width: width}}>
		<source type="video/mp4" src={previewUrl} />
	</video>
);

export default GifVideo;