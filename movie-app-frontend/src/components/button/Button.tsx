import React from 'react';
import styled from 'styled-components';
import { Size } from 'types';
import { cx, css } from '@emotion/css';
import { colors } from 'constant';
import { AppIcon, Icon } from 'components';

type ButtonProps = {
	children: React.ReactNode;
	icon?: AppIcon;
	onClick?: () => void;
	size?: Size;
	variant?: 'black' | 'red';
	type?: 'button' | 'submit' | 'reset';
};

const sizeStyles: Record<Size, string> = {
	[Size.SM]: `height: 40px`,
	[Size.MD]: `height: 52px`,
	[Size.LG]: `height: 56px`,
};

const StyledButton = styled.button<{ size: Size; variant: 'black' | 'red' }>`
	padding-left: 20px;
	padding-right: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	outline: none;
	border-radius: 8px;
	column-gap: 4px;
	cursor: pointer;
	background-color: ${({ variant }) =>
		variant === 'black' ? colors.black : colors.red[45]};
	${({ size }) => sizeStyles[size]};
`;

const buttonFontStyles: Record<Size, string> = {
	[Size.SM]: `font-size: 14px`,
	[Size.MD]: `font-size: 14px`,
	[Size.LG]: `font-size: 18px`,
};

const Button = ({
	children,
	icon,
	onClick,
	size = Size.SM,
	variant = 'red',
	type = 'button',
}: ButtonProps) => {
	return (
		<StyledButton type={type} onClick={onClick} size={size} variant={variant}>
			{icon ? <Icon icon={icon} color={colors.white} /> : null}
			<span
				className={cx(
					css`
						color: ${colors.white};
						font-weight: 600;
						${buttonFontStyles[size]}
					`
				)}
			>
				{children}
			</span>
		</StyledButton>
	);
};

export default Button;
