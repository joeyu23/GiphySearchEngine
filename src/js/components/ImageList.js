import React from "react";
import Image from "./Image";
import NoImages from "./NoImages";

const ImageList = props => {
	const results = props.data;
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
};

export default ImageList;