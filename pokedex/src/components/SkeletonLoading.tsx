import React from 'react';

const SkeletonLoading = ({
	width,
	height,
}: {
	width?: number;
	height: number;
}) => {
	return (
		<div
			className="bg-slate-200 animate-pulse"
			style={{ width: width || 'auto', height }}
		/>
	);
};

export default SkeletonLoading;
