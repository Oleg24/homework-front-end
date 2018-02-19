import React from 'react';
import GifVideo from './GifVideo';
import VisibilitySensor from 'react-visibility-sensor';
import Loader from './Loader';
import {isMobile} from 'react-device-detect';


const GifMinCard = ({
	previewUrl,
	previewImage,
	isAutoPlayActive,
	selectGiphy
}) => {
	console.log(isMobile)
	return (
		<div className={isMobile? "gif-card-mini__mobile":"gif-card-mini"}
			 onClick={selectGiphy}>
			<VisibilitySensor partialVisibility>
				{({isVisible}) =>
					isVisible ? <GifVideo
						isAutoPlayActive={isAutoPlayActive}
						previewUrl={previewUrl}
						previewImage={previewImage}
						width={isMobile ? 100 : 200}
						height={isMobile ? 120 : 120}
					/> : <div className="gif-card-mini__loading"><Loader /></div>
				}
			</VisibilitySensor>
		</div>
	)
};

export default GifMinCard;