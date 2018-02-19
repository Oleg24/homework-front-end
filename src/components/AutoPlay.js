import React, {Component} from 'react';
import {Icon} from 'semantic-ui-react';

const ACTIVE = 'teal';
const INACTIVE = 'grey';

const AutoPlay = ({
	isAutoPlayActive,
	toggleAutoPlay
})=>(
	<div className="toggle-auto-play__container">
		Auto Play Gifs
		<Icon name="play"
			  size="large"
			  className="toggle-auto-play__icon"
			  disabled={isAutoPlayActive}
			  color={isAutoPlayActive ? ACTIVE : INACTIVE}
			  onClick={isAutoPlayActive  ? "" :toggleAutoPlay}
		/>
		<Icon name="pause"
			  size="large"
			  className="toggle-auto-play__icon"
			  disabled={!isAutoPlayActive}
			  color={isAutoPlayActive ? INACTIVE : ACTIVE}
			  onClick={isAutoPlayActive ? toggleAutoPlay: ""}
		/>
	</div>
);

export default AutoPlay;