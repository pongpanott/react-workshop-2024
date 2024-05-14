import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', minHeight: '100vw' }}
		>
			<nav style={{ height: '60px', background: 'pink' }}>nav</nav>
			<main style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
				<Outlet />
			</main>
			<footer style={{ height: '200px', background: 'lightblue' }}>
				footer
			</footer>
		</div>
	);
};

export default Layout;
