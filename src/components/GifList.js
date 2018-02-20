import React from 'react';
import GifMinCard from './GifMinCard';
import InfiniteScroll from 'react-infinite';
import Loader from './Loader';
import {isMobileOnly, isTablet} from 'react-device-detect'
import PropTypes from 'prop-types';

const GifList = ({
	gifList,
	loadMore,
	loading,
	isAutoPlayActive,
	selectGif
}) => {
	let grid = [];
	let row = [];
	const itemsPerRow = isMobileOnly ? 3 : isTablet ? 4 : 5;
	let count = 0;

	gifList.forEach((gif, idx)=> {
		row.push(
			<GifMinCard
				{...gif}
				key={gif.id}
				isAutoPlayActive={isAutoPlayActive}
				selectGif={()=> selectGif(gif)}
			/>
		);
		count++;
		if (itemsPerRow === count) {
			grid.push(<div className="gif-list__row" key={idx}>{row}</div>);
			row = [];
			count = 0;
		}
	});
	return (
		<InfiniteScroll elementHeight={isMobileOnly ? 120 : 200}
						useWindowAsScrollContainer
						onInfiniteLoad={loadMore}
						preloadBatchSize={InfiniteScroll.containerHeightScaleFactor(2)}
						preloadAdditionalHeight={InfiniteScroll.containerHeightScaleFactor(2)}
						infiniteLoadBeginEdgeOffset={5}
						isInfiniteLoading={loading}
						className="giphy-list"
						loadingSpinnerDelegate={<Loader/>}
		>
			{grid}
		</InfiniteScroll>
	)
};

GifList.propTypes = {
	giphyList: PropTypes.arrayOf(PropTypes.shape({
		previewUrl: PropTypes.string,
		previewImage: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
		userName: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
		avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
		twitterHandle: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
		rating: PropTypes.string,
		title: PropTypes.string,
		embedUrl: PropTypes.string,
		url: PropTypes.string,
		id: PropTypes.string
	})),
	loadMore: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	isAutoPlayActive: PropTypes.bool.isRequired,
	selectGif: PropTypes.func.isRequired
};

export default GifList ;