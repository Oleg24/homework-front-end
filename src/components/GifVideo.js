import React from 'react';

const GifVideo = ({
	width,
	height,
	previewUrl,
	previewImage,
	isAutoPlayActive
}) => (
	<div>
		{
			isAutoPlayActive ?
				<video autoPlay loop style={{height: height, width: width}}>
					<source type="video/mp4" src={previewUrl} />
				</video> : <img style={{height: height, width: width}} src={previewImage} />
		}
	</div>
);

export default GifVideo;