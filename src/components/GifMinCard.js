import React from 'react';
import GifVideo from './GifVideo';
import VisibilitySensor from 'react-visibility-sensor';
import Loader from './Loader';
import {isMobile} from 'react-device-detect';
import PropTypes from 'prop-types';

const GifMinCard = ({
	previewUrl,
	previewImage,
	isAutoPlayActive,
	selectGif
}) => {
	return (
		<div className={isMobile ? "gif-card-mini__mobile":"gif-card-mini"}
			 onClick={selectGif}>
			<VisibilitySensor partialVisibility>
				{({isVisible}) =>
					isVisible ? <GifVideo
						isAutoPlayActive={isAutoPlayActive}
						previewUrl={previewUrl}
						previewImage={previewImage}
						width={isMobile ? 120 : 200}
						height={isMobile ? 120 : 120}
					/> : <div className="gif-card-mini__loading"><Loader /></div>
				}
			</VisibilitySensor>
		</div>
	)
};

GifMinCard.propTypes = {
	previewUrl: PropTypes.string.isRequired,
	previewImage: PropTypes.string.isRequired,
	isAutoPlayActive: PropTypes.bool.isRequired,
	selectGif: PropTypes.func.isRequired
};

export default GifMinCard;