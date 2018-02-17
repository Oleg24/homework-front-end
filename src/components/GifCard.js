import React from 'react';

const GifCard = ({
	previewUrl,
	width,
	height
}) => {
	return (
		<div className="giphy-card">
			<video autoPlay loop style={{height: height, width: width}}>
				<source type="video/mp4" src={previewUrl} />
			</video>
		</div>
	)
};

export default GifCard;