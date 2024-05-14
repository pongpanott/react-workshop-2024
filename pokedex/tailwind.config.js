import { colors } from './src/constants/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				outfit: 'Outfit',
			},
			colors: {
				...colors,
			},
		},
	},
	plugins: [],
};
