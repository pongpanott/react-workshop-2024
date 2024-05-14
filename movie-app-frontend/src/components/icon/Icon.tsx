import React from 'react';
import { AppIcon } from './app-icon';

import * as OutlineIcon from '@heroicons/react/24/outline';
import * as SolidIcon from '@heroicons/react/24/solid';
import { css, cx } from '@emotion/css';

const appIconMapper: Record<AppIcon, React.ReactNode> = {
	[AppIcon.PLAY_SOLID]: <SolidIcon.PlayIcon />,
	[AppIcon.PLUS_SOLID]: <SolidIcon.PlusIcon />,

	//outline icon goes here
	[AppIcon.SPEAKER_WAVE_OUTLINE]: <OutlineIcon.SpeakerWaveIcon />,
	[AppIcon.HAND_THUMP_UP_OUTLINE]: <OutlineIcon.HandThumbUpIcon />,
};

type IconProps = {
	icon: AppIcon;
	size?: number;
	color?: string;
};

const Icon = ({ icon, size = 24, color }: IconProps) => {
	return (
		<i
			className={cx(css`
				svg {
					width: ${size}px;
					height: ${size}px;
					color: ${color};
				}
			`)}
		>
			{appIconMapper[icon]}
		</i>
	);
};

export default Icon;
