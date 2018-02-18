import React from 'react';

const EmbedView = ({
	embedLink,
	height,
	width,
	url
}) => (
	<div className="embed-container">
		GIF Embed Code
		<div className="embed-code" dangerouslySetInnerHTML={{ __html: '<h1>' +'Hi'+ '</h1>' }} />
	</div>
);

export default EmbedView;
//
// '
// <iframe src={embedLink} width={width} height={height} frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
// '
// + '<p><a href={url}>via GIPHY</a></p>'