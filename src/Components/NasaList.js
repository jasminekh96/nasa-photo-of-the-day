import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NasaCard from './NasaCard';

export default function NasaList() {
	const [ nasa, setNasa ] = useState({
		date        : '',
		explanation : '',
		hdurl       : '',
		media_type  : '',
		title       : '',
	});

	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=P6Cb2ndUVB7sXPf5ROHpFPHn6VM6Vz8cSWTgffsI`)
			.then((response) => {
				console.log(response.data);
				setNasa(response.data);
			})
			.catch((error) => {
				console.log('Nah NASA', error);
			});
	}, []);
	return (
		<div className='NASA'>
			<NasaCard
				key={nasa.id}
				date={nasa.date}
				explanation={nasa.explanation}
				title={nasa.title}
				media_type={nasa.url}
			/>
		</div>
	);
}
