import React from 'react';
import { Pokemon } from '../../types/pokemon';
import { toCapitalize } from '../../utils/formatter';

const DetailInfo = ({ label, value }: { label: string; value: string[] }) => (
	<div className="flex flex-col gap-y-4 flex-1 justify-between items-center">
		<div className="flex flex-1 flex-col justify-center">
			{value.map((item) => (
				<p className="text-center" key={item}>
					{item}
				</p>
			))}
		</div>
		<p className="font-light flex-0">{label}</p>
	</div>
);

const Divider = () => <div className="h-full w-[1px] bg-slate-200" />;

const CommonDetail = ({ pokemon }: { pokemon: Pokemon }) => {
	const weight = (pokemon.weight * 100) / 1000;
	const height = (pokemon.height * 10) / 100;

	return (
		<div className="flex justify-between">
			<DetailInfo label="Weight" value={[`${weight} kg`]} />

			<Divider />

			<DetailInfo label="Height" value={[`${height} m`]} />

			<Divider />

			<DetailInfo
				label="Abilities"
				value={pokemon.abilities
					.map((item) => item.ability)
					.map((result) => toCapitalize(result.name))}
			/>
		</div>
	);
};

export default CommonDetail;
