import React from "react";

const Image = props =>
	<div className = "col">
		<a href={props.link}>
			<img src={props.data.images.fixed_height_small.url} alt="GIF HERE"/>
		</a>
	</div>;

export default Image;