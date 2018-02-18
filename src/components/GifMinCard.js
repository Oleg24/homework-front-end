import React from 'react';
import GifVideo from './GifVideo';

const GifMinCard = ({
	previewUrl,
	width,
	height,
	selectGiphy
}) => {
	return (
		<div className="gif-card-mini" onClick={selectGiphy}>
			<GifVideo
				previewUrl={previewUrl}
				width={width}
				height={height}
			/>
		</div>
	)
};

export default GifMinCard;