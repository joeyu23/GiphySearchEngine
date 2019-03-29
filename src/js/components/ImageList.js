import React, { Component } from "react";
import Image from "./Image";
import NoImages from "./NoImages";
import { connect } from 'react-redux'; 

class ImageList extends Component {
	render() {
		const results = this.props.gifs;
		let images;
		if (results && results.length > 0){
			images = results.map(image=>
				<Image
					key={image.id}
					url={image.url}
					link={image.embed_url}
					data={image}
				/>
			);
		} else {
			images = <NoImages />;
		}
		return (
			<div className="container">
				<div className="row">
					{images}
				</div>
			</div>
		);
	}
};

const mapStateToProps = state => {
	return {
		gifs: state.gifs,
		loadingState: state.loadingState,
		error: state.error
	}
}

export default connect(mapStateToProps)(ImageList);