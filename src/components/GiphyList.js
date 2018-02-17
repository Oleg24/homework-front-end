import React, {Component} from 'react';
import GifCard from './GifCard';

class GiphyList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {giphyList} = this.props;
		return (
			<div className="giphy-list">
				{giphyList.map((gif)=> {
					return <GifCard key={gif.id} {...gif} />
				})
				}
			</div>
		)
	}
}

export default GiphyList;