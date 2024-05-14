import { colors } from '../constants/theme';

export const typeStyleMapper: Record<string, { bg: string; text: string }> = {
	fire: { bg: '#EE8130', text: 'white' },
	water: {
		bg: '#6390F0',
		text: 'white',
	},
	electric: {
		bg: '#F7D02C',
		text: colors.black,
	},
	grass: {
		bg: '#7AC74C',
		text: colors.black,
	},
	ice: {
		bg: '#96D9D6',
		text: colors.black,
	},
	fighting: {
		bg: '#C22E28',
		text: 'white',
	},
	poison: {
		bg: '#A33EA1',
		text: 'white',
	},
	ground: {
		bg: '#E2BF65',
		text: colors.black,
	},
	flying: {
		bg: '#A98FF3',
		text: 'white',
	},
	psychic: {
		bg: '#F95587',
		text: 'white',
	},
	bug: {
		bg: '#A6B91A',
		text: 'white',
	},
	rock: {
		bg: '#B6A136',
		text: 'white',
	},
	ghost: {
		bg: '#735797',
		text: 'white',
	},
	dragon: {
		bg: '#6F35FC',
		text: 'white',
	},
	dark: {
		bg: '#705746',
		text: 'white',
	},
	steel: {
		bg: '#B7B7CE',
		text: colors.black,
	},
	fairy: {
		bg: '#D685AD',
		text: 'white',
	},
	normal: {
		bg: '#A8A77A',
		text: 'white',
	},
};
