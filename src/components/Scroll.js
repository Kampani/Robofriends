import React from 'react';

const Scroll = (props) => {
	return (
		<div style = {{overflowY: 'Scroll',
					   height: '465px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;

	
