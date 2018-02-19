import React from 'react';
import {Icon} from 'semantic-ui-react';

const createMarkup = (embedUrl, height, width, url)=> {
	return "<iframe src='" + embedUrl + "' width='" + width + "' height='" + height + "' frameBorder=\"0\" " +
		"class=\"giphy-embed\" allowFullScreen></iframe><p><a href='" + url + "'>via GIPHY</a></p>";
};

const copyMarkup = () => {
	document.getElementById('embed-markup').select();
	document.execCommand('copy');
};

const EmbedView = ({
	embedUrl,
	height,
	width,
	url
}) => {
	const embedMarkup = createMarkup(embedUrl, height, width, url);
	return (
		<div className="embed">
			GIF Embed Code
			<div className="embed-container">
				<input id="embed-markup" className="embed-code" value={embedMarkup} />
				<Icon name="copy" size="large" onClick={copyMarkup} />
			</div>
		</div>)
};

export default EmbedView;