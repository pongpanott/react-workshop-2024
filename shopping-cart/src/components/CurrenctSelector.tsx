import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { Currency, useCurrencyContext } from '../context/CurrencyContext';

const CurrenctSelector = () => {
	const { currency, setCurrency } = useCurrencyContext();

	return (
		<Select
			value={currency}
			onChange={(e) => setCurrency(e.target.value as Currency)}
			defaultValue={currency}
			size="small"
			sx={{
				boxShadow: 'none',
				'.MuiOutlinedInput-notchedOutline': { border: 0 },
				'&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
					border: 0,
				},
				'&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
					{
						border: 0,
					},
			}}
		>
			<MenuItem value={Currency.USD}>USD</MenuItem>
			<MenuItem value={Currency.THB}>THB</MenuItem>
		</Select>
	);
};

export default CurrenctSelector;
