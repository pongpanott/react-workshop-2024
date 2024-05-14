export type Pokemon = {
	id: number;
	name: string;
	types: {
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}[];
	image: string;
	height: number;
	weight: number;
	abilities: {
		ability: {
			name: string;
			url: string;
		};
	}[];
	stats: {
		baseStat: number;
		effort: number;
		stat: { name: string; url: string };
	}[];
};
