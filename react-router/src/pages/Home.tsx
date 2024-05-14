import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div>
			Home page
			<button
				onClick={() => navigate('/fruit')}
				style={{ display: 'block', marginTop: 16 }}
			>
				go to Fruit page
			</button>
		</div>
	);
};

export default HomePage;
