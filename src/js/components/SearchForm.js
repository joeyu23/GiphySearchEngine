import React, { Component } from 'react';
import { fetchGifs } from '../actions';
import { connect } from 'react-redux';
import { INPUT_SEARCH } from '../constants/actionsTypes';

class SearchForm extends Component {
	state = {
		searchText: ''
	};

	onSearchChange = e => {
		this.props.dispatch({
			type: INPUT_SEARCH,
			searchText: e.target.value
		})
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.dispatch(fetchGifs(this.props.searchText));
		//this.props.dispatch(fetchGifs(this.query.value));
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

const mapStateToProps = state => ({
	searchText: state.searchText,
	gifs: state.gifs,
	loadingState: state.gifs.loading,
	error: state.gifs.error
});

/*const mapDispatchToProps = dispatch => ({
	onSearchChange: (e) => dispatch({
		type: INPUT_SEARCH,
		searchText: e.target.value
	})
})*/

export default connect(mapStateToProps)(SearchForm);