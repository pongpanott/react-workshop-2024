import { Pokemon } from '../types/pokemon';
import pokemonDAO from './dao/pokemon.dao';

const baseEndpoint = 'https://pokeapi.co/api/v2';

export const apiService = {
	getPagination: async (): Promise<{ count: number }> =>
		await fetch(`${baseEndpoint}/pokemon`).then((res) => res.json()),

	getPokemons: async ({ offset, limit }: { offset: number; limit: number }) => {
		return fetch(`${baseEndpoint}/pokemon?limit=${limit}&offset=${offset}`)
			.then((res) => res.json())
			.then((data) => {
				const response = data.results as { name: string; url: string }[];

				const responseArray = response.map((data) => {
					return fetch(data.url).then((dataRes) =>
						dataRes.json().then((dataJson) => pokemonDAO(dataJson))
					);
				});

				return Promise.all<Promise<Pokemon>>(responseArray);
			});
	},

	searchPokemon: async ({ search }: { search: string }): Promise<Pokemon> =>
		fetch(`${baseEndpoint}/pokemon/${search}`)
			.then((res) => res.json())
			.then((data) => pokemonDAO(data)),
};
