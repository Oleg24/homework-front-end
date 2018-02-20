import React from 'react';
import {Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';

/**
 * @desc creates an iframe for the user to copy & paste
 * @param {String} embedUrl
 * @param {Number} height
 * @param {Number} width
 * @param {String} url
 * @returns {string}
 */
const createMarkup = (embedUrl, height, width, url)=> {
	return "<iframe src='" + embedUrl + "' width='" + width + "' height='" + height + "' frameBorder=\"0\" " +
		"class=\"giphy-embed\" allowFullScreen></iframe><p><a href='" + url + "'>via GIPHY</a></p>";
};

/**
 * @desc copies input to users clipboard
 */
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

EmbedView.propTypes = {
	embedUrl: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	url: PropTypes.string.isRequired
};

export default EmbedView;