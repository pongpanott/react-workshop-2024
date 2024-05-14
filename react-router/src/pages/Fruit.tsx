import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const FruitPage = () => {
	const navigate = useNavigate();

	return (
		<div>
			Select a fruit
			<div style={{ marginTop: 8, display: 'flex', columnGap: 8 }}>
				<button onClick={() => navigate('/fruit/apple')}>Apple</button>
				<button onClick={() => navigate('/fruit/orange')}>Orange</button>
				<button onClick={() => navigate('/fruit/banana')}>Banana</button>
			</div>
			<div
				style={{
					margin: '24px 0',
				}}
			>
				<Outlet />
			</div>
		</div>
	);
};

export default FruitPage;
