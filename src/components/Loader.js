import React from 'react';
import loader from '../assets/images/loader.gif';

const styles = {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
};

const Loader = ({loading}) => (
	loading ?
		<div style={styles}>
			<img src={loader} alt="" />
		</div> : null
);

export default Loader;