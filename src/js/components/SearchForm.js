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
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	};

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>
				<div className="input-group mb-3">
					<input
						className="form-control"
						aria-describedby="basic-addon2"
						type="search"
						onChange={this.onSearchChange}
						ref={input => (this.query = input)}
						name="search"
						placeholder="Search for a GIF here!"
					/>
					<div className="input-group-append">
						<button type="submit" className="btn btn-outline-secondary">
							<i>search</i>
						</button>
					</div>
				</div>
			</form>
		);
	}
}