import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AppLayout = () => {
	return (
		<div>
			<nav
				style={{
					borderBottom: '1px solid lightgrey',
					padding: '16px 24px',
					display: 'flex',
					columnGap: 16,
				}}
			>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</nav>
			<main style={{ padding: 32 }}>
				<Outlet />
			</main>
		</div>
	);
};

export default AppLayout;
