import React from 'react';
import PropTypes from 'prop-types';

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
				</video> : <img style={{height: height, width: width}} src={previewImage} alt="gif preview" />
		}
	</div>
);

GifVideo.propTypes = {
	previewUrl: PropTypes.string.isRequired,
	isAutoPlayActive: PropTypes.bool.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	previewImage: PropTypes.string
};

export default GifVideo;