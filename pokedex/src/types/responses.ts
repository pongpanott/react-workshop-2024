export type PokekmonResponse = {
	id: number;
	name: string;
	types: {
		slot: number;
		type: { name: string; url: string };
	}[];
	sprites: {
		other: {
			'official-artwork': {
				front_default: string;
				front_shiny: string;
			};
		};
	};
	height: number;
	weight: number;
	abilities: {
		ability: {
			name: string;
			url: string;
		};
	}[];
	stats: {
		base_stat: number;
		effort: number;
		stat: { name: string; url: string };
	}[];
};
