import React, {Component} from 'react';
import GifCard from './GifCard';

class GiffyList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {giphyList} = this.props;
		return (
			<div>
				{giphyList.map((gif)=> {
					return <GifCard {...gif} />
				})
				}
			</div>
		)
	}
}

export default GiffyList;