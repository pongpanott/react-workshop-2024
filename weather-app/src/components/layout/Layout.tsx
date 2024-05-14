import React from 'react';
import './Layout.css';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const timenow = new Date().getHours();

	return (
		<div className={`time-${timenow} layout`}>
			<div className="inner-container">{children}</div>
		</div>
	);
};

export default Layout;
