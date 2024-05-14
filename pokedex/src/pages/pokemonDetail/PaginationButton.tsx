import React from 'react';

const PaginationButton = ({
	onClick,
	children,
}: {
	onClick: () => void;
	children: React.ReactNode;
}) => {
	return (
		<button type="button" onClick={onClick}>
			{children}
		</button>
	);
};

export default PaginationButton;
