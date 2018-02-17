import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';

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
		return (
			<Input
				icon='search'
				placeholder='Search for gifs...'
				value={searchValue}
				onChange={this.handleChange}
			/>
		)
	}

}

export default SearchBar;