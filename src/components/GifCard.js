import React from 'react';

const GifCard = ({
	link,
	previewUrl,
	width,
	height
}) => {
	return (
		<div>
			<div>{link}</div>
			<div>{previewUrl}</div>
			<div>{width}</div>
			<div>{height}</div>
		</div>
	)
};

export default GifCard;