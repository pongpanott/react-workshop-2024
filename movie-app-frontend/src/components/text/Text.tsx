import React from 'react';
import { colors } from 'constant';
import { cx, css } from '@emotion/css';

type TextProps = {
	children: React.ReactNode;
	color?: string;
	size?: number;
	weight?: number;
	style?: React.HTMLAttributes<HTMLParagraphElement>[`style`];
};

const Text = ({
	children,
	color = colors.black,
	size = 16,
	weight = 400,
	style,
}: TextProps) => {
	return (
		<p
			className={cx(
				css`
					color: ${color};
					font-weight: ${weight};
					font-size: ${size}px;
				`
			)}
			style={style}
		>
			{children}
		</p>
	);
};

export default Text;
