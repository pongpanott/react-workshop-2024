import React from 'react';
import { toCapitalize } from '../utils/formatter';
import { typeStyleMapper } from '../utils/typeColoring';

const TypeTag = ({
	type,
	size = 'small',
}: {
	type: string;
	size?: 'small' | 'large';
}) => {
	return (
		<div
			className={`${
				size === 'small' ? 'px-2 py-[1px]' : 'px-3 py-[2px]'
			} rounded`}
			style={{ background: typeStyleMapper[type]?.bg || 'white' }}
		>
			<p
				className={
					size === 'small' ? 'text-xs font-light' : 'text-lg font-normal'
				}
				style={{ color: typeStyleMapper[type]?.text }}
			>
				{toCapitalize(type)}
			</p>
		</div>
	);
};

export default TypeTag;
