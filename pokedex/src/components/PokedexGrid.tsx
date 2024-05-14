import React from 'react';

const PokedexGrid = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={`${className} grid grid-cols-4 w-[952px] mx-auto gap-x-6 gap-y-12`}
		>
			{children}
		</div>
	);
};

export default PokedexGrid;
