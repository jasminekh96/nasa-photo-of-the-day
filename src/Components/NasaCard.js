import React from 'react';

const NasaCard = (props) => {
	return (
		<div className='ListNasa' key={props.id}>
			<h2> {props.title} </h2>
			<img src={props.media_type} />
			<p>{props.date}</p>
			<p>{props.explanation}</p>
		</div>
	);
};
export default NasaCard;
