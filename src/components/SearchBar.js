import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: ''
		};
		this.handleChange = this._handleChange.bind(this);
	}

	_handleChange(e) {
		this.setState({
			searchValue: e.target.value
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