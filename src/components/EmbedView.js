import React from 'react';

const createMarkup = (embedUrl, height, width, url)=> {
	return "<iframe src='" + embedUrl + "' width='" + width + "' height='" + height + "' frameBorder=\"0\" " +
		"class=\"giphy-embed\" allowFullScreen></iframe><p><a href='" + url + "'>via GIPHY</a></p>";
};

const EmbedView = ({
	embedUrl,
	height,
	width,
	url
}) => (
	<div className="embed-container">
		GIF Embed Code
		<input className="embed-code" value={createMarkup(embedUrl, height, width, url)} />
	</div>
);

export default EmbedView;