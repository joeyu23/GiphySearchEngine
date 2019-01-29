import React from "react";

const Image = props =>
	<li>
		<a href = {props.link}>
			<img src={props.url} alt="GIF here"/>
		</a>
		<p>
			<a href={props.link}>See full GIF</a>
		</p>
	</li>;

export default Image;