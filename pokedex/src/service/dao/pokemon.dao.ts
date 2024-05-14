import { Pokemon } from '../../types/pokemon';
import { PokekmonResponse } from '../../types/responses';

const pokemonDAO = (data: PokekmonResponse): Pokemon => {
	return {
		id: data.id,
		name: data.name,
		types: data.types,
		image: data.sprites.other['official-artwork'].front_default,
		height: data.height,
		weight: data.weight,
		abilities: data.abilities,
		stats: data.stats?.map((item) => {
			return {
				baseStat: item.base_stat,
				...item,
			};
		}),
	};
};

export default pokemonDAO;
