import React from 'react';

const Searchbox = (props) => {
	return (
		<div className = 'pa2'>
			<input 
				className = 'pa3 ba bg-lightest-blue'
				onInput = {props.onSearchChange}
				type = 'text' 
				placeholder = 'search robots'
			/>
		</div>
	);
}

export default Searchbox;