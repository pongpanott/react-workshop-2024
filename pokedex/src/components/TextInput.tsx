import React, { SetStateAction } from 'react';

type TextInputProps = {
	value: string;
	onChange: React.Dispatch<SetStateAction<string>>;
};

const TextInput = ({ value, onChange }: TextInputProps) => {
	return (
		<input
			type="text"
			value={value}
			onChange={(e) => onChange(e.target.value)}
			onClick={() => onChange('')}
			placeholder="Name or Number"
			className="border border-neutral-300 rounded placeholder:text-neutral-400 px-3 py-1 outline-none focus:border-neutral-500"
		/>
	);
};

export default TextInput;
