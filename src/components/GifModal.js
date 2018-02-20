import React from 'react';
import ReactModal from 'react-modal';
import GifFullCard from './GifFullCard';
import PropTypes from 'prop-types';

ReactModal.setAppElement('#root');
ReactModal.defaultStyles.overlay.backgroundColor = "#00C5FF";

const GifModal = ({
	open, gif, toggleModal
})=> (
	<ReactModal
		isOpen={open}
		closeTimeoutMS={150}
		contentLabel="Giphy Modal!"
		className="gif-modal"
	>
		<GifFullCard gif={gif} toggleModal={toggleModal} />
	</ReactModal>
);

GifModal.propTypes = {
	open: PropTypes.bool.isRequired,
	toggleModal: PropTypes.func.isRequired,
	gif: PropTypes.shape({
		previewUrl: PropTypes.string,
		previewImage: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
		userName: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
		avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
		twitterHandle: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
		rating: PropTypes.string,
		title: PropTypes.string,
		embedUrl: PropTypes.string,
		url: PropTypes.string,
		id: PropTypes.string
	})
};

export default GifModal;