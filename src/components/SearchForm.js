import React, { Component } from 'react';

export default class SearchForm extends Component {
	state = {
		searchText: ''
	};

	onSearchChange = e => {
		this.setState({ searchText: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.props.onSearch);
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	};

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>
				<label className="is-hidden" htmlFor="search">Search</label>
				<input
					type="search"
					onChange={this.onSearchChange}
					ref={input => (this.query = input)}
					name="search"
					placeholder="Search for a GIF here!"
				/>
				<button type="submit" id="submit" className="search-button">
					<i className="material-icons icn-search">search</i>
				</button>
			</form>
		);
	}
}