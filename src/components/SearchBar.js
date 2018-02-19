import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';
import AutoPlay from './AutoPlay';

const WAIT_INTERVAL = 800;

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: ''
		};
		this.timeout = null;
		this.handleChange = this._handleChange.bind(this);
	}

	_handleChange(e) {
		const searchText = e.target.value;
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		/* wait 800ms after user stops typing before sending to giphy api */
		this.timeout = setTimeout(()=> {
			this.props.handleSearch(searchText);
		}, WAIT_INTERVAL);
		this.setState({
			searchValue: searchText
		});
	}

	render() {
		const {searchValue} = this.state;
		const {toggleAutoPlay, isAutoPlayActive } = this.props;
		return (
			<div className="search-bar">
				<Input
					icon='search'
					className="search-bar__input"
					placeholder='Search for all GIFs'
					fluid
					value={searchValue}
					onChange={this.handleChange}
				/>
				<AutoPlay
					isAutoPlayActive={isAutoPlayActive}
					toggleAutoPlay={toggleAutoPlay} 
				/>
			</div>
		)
	}

}

export default SearchBar;