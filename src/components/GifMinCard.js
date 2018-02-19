import React from 'react';
import GifVideo from './GifVideo';
import VisibilitySensor from 'react-visibility-sensor';
import Loader from './Loader';

const GifMinCard = ({
	previewUrl,
	previewImage,
	isAutoPlayActive,
	selectGiphy
}) => {
	return (
		<div className="gif-card-mini" onClick={selectGiphy}>
			<VisibilitySensor partialVisibility>
				{({isVisible}) =>
					isVisible ? <GifVideo
						isAutoPlayActive={isAutoPlayActive}
						previewUrl={previewUrl}
						previewImage={previewImage}
						width={200}
						height={100}
					/> : <div className="gif-card-mini__loading"><Loader /></div>
				}
			</VisibilitySensor>
		</div>
	)
};

export default GifMinCard;