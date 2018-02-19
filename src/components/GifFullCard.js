import React, {Component} from 'react';
import GifVideo from './GifVideo';
import EmbedView from './EmbedView';
import {Button} from 'semantic-ui-react';
import {Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TWITTER_URL = "https://twitter.com/";

class GifFullCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openEmbedLink: false
		};
		this.toggleEmbed = this._toggleEmbed.bind(this);
	}

	_toggleEmbed() {
		this.setState({
			openEmbedLink: !this.state.openEmbedLink
		});
	}

	render() {
		const {gif, toggleModal} = this.props;
		const {openEmbedLink} = this.state;

		return (
			<div className="gif-card-full">
				<div className="gif-card__header">
					<Icon name="close" size="large" onClick={toggleModal} />
				</div>
				<div className="gif-card__title">{gif.title}</div>
				<div className="gif-card__video">
					<GifVideo
						previewUrl={gif.previewUrl}
						width={gif.width}
						height={gif.height}
						isAutoPlayActive={true}
					/>
				</div>
				<div className="gif-card__meta">
					<div>
						<div className="gif-card__user">
							<div className="gif-card__user-name">{gif.userName}</div>
							{gif.twitterHandle ?
								<a className="gif-card__user-twitter" href={TWITTER_URL + gif.twitterHandle} target="_black">
									{gif.twitter}
								</a> : ""
							}
							<img className="gif-card__user-avatar" src={gif.avatar} />
							<div className="gif-card__rating">Rated - {gif.rating}</div>
						</div>
					</div>
					<div>
						<Button primary onClick={this.toggleEmbed}>Embed</Button>
					</div>
				</div>
				{openEmbedLink ?
					<div className="gif-card__embed-code">
						<EmbedView
							embedUrl={gif.embedUrl}
							height={gif.height}
							width={gif.width}
							url={gif.url}
						/></div> : ""
				}
			</div>
		)
	};
}

GifFullCard.propTypes = {
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
	}),
	toggleModal: PropTypes.func.isRequired
};

export default GifFullCard;