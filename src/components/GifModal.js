import React, {Component} from 'react';
import ReactModal from 'react-modal';
import GifFullCard from './GifFullCard';

ReactModal.setAppElement('#root');
ReactModal.defaultStyles.overlay.backgroundColor = "#00C5FF";


class GifModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {open, gif, toggleModal} = this.props;
		return (
			<ReactModal
				isOpen={open}
				closeTimeoutMS={150}
				contentLabel="Giphy Modal!"
				className="gif-modal"
			>
				<GifFullCard gif={gif} toggleModal={toggleModal} />
			</ReactModal>
		)
	}

}

export default GifModal;