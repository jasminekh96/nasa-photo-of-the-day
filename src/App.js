import React from 'react';
import NasaList from './Components/NasaList';
import './App.css';
import styled from 'styled-components';

function App() {
	const App = styled.div`
		background: black;
		border-radius: 30%;
		background-color: #black;
		box-shadow: 0 0 60px 30px #2f4f4f, 0 0 100px 60px #2f4f4f, 0 0 140px 90px black;
		text-align: center;
	`;
	return (
		<App>
			{/* <p>Read through the instructions in the README.md file to build your NASA app! Have fun!</p> */}
			<NasaList />
		</App>
	);
}

export default App;
