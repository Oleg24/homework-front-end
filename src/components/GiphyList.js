import React, {Component} from 'react';
import GifMinCard from './GifMinCard';

class GiphyList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {giphyList, selectGiphy} = this.props;
		return (
			<div className="giphy-list">
				{giphyList.map((gif)=> {
					return <GifMinCard
						{...gif}
						key={gif.id}
						selectGiphy={()=> selectGiphy(gif)} />
				})
				}
			</div>
		)
	}
}

export default GiphyList;