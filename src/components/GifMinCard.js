import React from 'react';
import GifVideo from './GifVideo';
import VisibilitySensor from 'react-visibility-sensor';
import Loader from './Loader';

const GifMinCard = ({
	previewUrl,
	width,
	height,
	selectGiphy
}) => {
	return (
		<div className="gif-card-mini" onClick={selectGiphy}>
			<VisibilitySensor partialVisibility>
				{({isVisible}) =>
					isVisible ? <GifVideo
						previewUrl={previewUrl}
						width={width}
						height={height}
					/> : <div className="gif-card-mini__loading"><Loader /></div>
				}
			</VisibilitySensor>
		</div>
	)
};

export default GifMinCard;