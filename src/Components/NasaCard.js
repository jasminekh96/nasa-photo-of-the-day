import React from 'react';
import { Card, CardImg } from 'reactstrap';
import styled from 'styled-components';

const NasaCard = (props) => {
	const Jumbotron = styled.h1`
		font-size: 20px;
		font-style: italic;
		color: #faebd7;
	`;
	const CardSubtitle = styled.p`
		font-size: 20px;
		font-family: 'Oswald', sans-serif;
		color: #ffe4e1;
	`;
	const CardText = styled.p`
		font-size: 20px;
		font-family: 'Oswald', sans-serif;
	`;
	return (
		<div className='ListNasa' key={props.id}>
			<Jumbotron>
				<h1 className='display-3'>{props.title}</h1>
			</Jumbotron>
			<Card>
				<CardImg width='800px' height='700px' src={props.media_type} alt='NASA Photo of the Day' />
				<CardSubtitle>{props.date}</CardSubtitle>
				<CardText>{props.explanation}</CardText>
			</Card>
		</div>
	);
};
export default NasaCard;
