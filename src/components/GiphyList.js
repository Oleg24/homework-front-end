import React, {Component} from 'react';
import GifMinCard from './GifMinCard';
import InfiniteScroll from 'react-infinite';
import Loader from './Loader';

class GiphyList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {giphyList, loadMore, loading, selectGif} = this.props;
		let rows = [];
		let tr = [];
		giphyList.forEach((gif, idx)=> {
			tr.push(
				<GifMinCard
					{...gif}
					key={gif.id}
					selectGiphy={()=> selectGif(gif)} />
			);
			if (idx % 3 === 0) {
				rows.push(<div className="gif-list__row" key={idx}>{tr}</div>);
				tr = [];
			}
		});

		return (
			<InfiniteScroll elementHeight={200}
							useWindowAsScrollContainer
							onInfiniteLoad={loadMore}
							preloadBatchSize={InfiniteScroll.containerHeightScaleFactor(2)}
							preloadAdditionalHeight={InfiniteScroll.containerHeightScaleFactor(2)}
							infiniteLoadBeginEdgeOffset={5}
							isInfiniteLoading={loading}
							className="giphy-list"
							loadingSpinnerDelegate={<Loader/>}
			>
				{rows}
			</InfiniteScroll>
		)
	}
}

export default GiphyList;

// containerHeight={window.innerHeight}

// <div id="gif-list-container" className="giphy-list">
// </div>