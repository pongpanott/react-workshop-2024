import { css, cx } from '@emotion/css';
import { AppIcon, Icon } from 'components';
import { colors } from 'constant';
import React from 'react';

type IconButtonProps = {
	icon: AppIcon;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
};

const IconButton = ({ icon, type = 'button', onClick }: IconButtonProps) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={cx(css`
				background: ${colors.neutral[6]};
				border: 1px solid ${colors.neutral[15]};
				width: 48px;
				height: 48px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 8px;
				cursor: pointer;
			`)}
		>
			<Icon icon={icon} color={colors.white} />
		</button>
	);
};

export default IconButton;
