import React, { CSSProperties } from 'react';

type FlexProps = {
	children: React.ReactNode;
	flexDirection?: CSSProperties['flexDirection'];
	alignItems?: 'center' | 'flex-start' | 'flex-end';
	justifyContent?: 'center' | 'flex-start' | 'flex-end';
	flexWrap?: 'wrap' | 'nowrap';
	flex?: boolean;
	gap?: number;
};

const Flex = ({
	children,
	flexDirection = 'row',
	alignItems = 'flex-start',
	justifyContent = 'flex-start',
	flexWrap = 'nowrap',
	flex = false,
	gap = 0,
}: FlexProps) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection,
				alignItems,
				justifyContent,
				flexWrap,
				flex: flex ? 1 : 0,
				gap,
			}}
		>
			{children}
		</div>
	);
};

export default Flex;
