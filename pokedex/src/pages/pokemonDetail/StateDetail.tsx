import React from 'react';
import { Pokemon } from '../../types/pokemon';
import { Stat } from '../../types/stat';
import { typeStyleMapper } from '../../utils/typeColoring';

const StatLabel = ({ children }: { children: React.ReactNode }) => (
	<p className="font-semibold text-sm">{children}</p>
);

const StateValueBar = ({
	progress,
	type,
}: {
	progress: number;
	type: string;
}) => {
	return (
		<div className="relative">
			<div
				className="h-[6px] rounded w-[200px]"
				style={{ background: typeStyleMapper[type].bg, opacity: 0.2 }}
			/>
			<div
				className="h-[6px] rounded absolute top-0 left-0"
				style={{
					width: `${progress}%`,
					background: typeStyleMapper[type].bg,
				}}
			/>
		</div>
	);
};

const StateValue = ({ value, type }: { value?: number; type: string }) => {
	if (value) {
		const statProgress = (value / 300) * 100;

		return (
			<div className="flex items-center gap-x-2">
				<p className="font-light w-8 text-sm">
					{value.toString().padStart(3, '0')}
				</p>
				<StateValueBar type={type} progress={statProgress} />
			</div>
		);
	}

	return null;
};

const StateDetail = ({ pokemon }: { pokemon: Pokemon }) => {
	const baseState = pokemon.stats.map((item) => {
		return { name: item.stat.name, value: item.baseStat };
	});

	return (
		<div className="flex gap-x-4">
			<div className="flex flex-col gap-y-1">
				<StatLabel>HP</StatLabel>
				<StatLabel>ATK</StatLabel>
				<StatLabel>DEF</StatLabel>
				<StatLabel>SATK</StatLabel>
				<StatLabel>SDEF</StatLabel>
				<StatLabel>SPD</StatLabel>
			</div>
			<div className="h-[140px] bg-slate-200 w-[2px]" />
			<div className="flex flex-col gap-y-1">
				<StateValue
					value={baseState.find((stat) => stat.name === Stat.HP)?.value}
					type={pokemon.types[0].type.name}
				/>
				<StateValue
					value={baseState.find((stat) => stat.name === Stat.ATTACK)?.value}
					type={pokemon.types[0].type.name}
				/>
				<StateValue
					value={baseState.find((stat) => stat.name === Stat.DEFENSE)?.value}
					type={pokemon.types[0].type.name}
				/>
				<StateValue
					value={
						baseState.find((stat) => stat.name === Stat.SPECIAL_ATTACK)?.value
					}
					type={pokemon.types[0].type.name}
				/>
				<StateValue
					value={
						baseState.find((stat) => stat.name === Stat.SPECIAL_DEFENSE)?.value
					}
					type={pokemon.types[0].type.name}
				/>
				<StateValue
					value={baseState.find((stat) => stat.name === Stat.SPEED)?.value}
					type={pokemon.types[0].type.name}
				/>
			</div>
		</div>
	);
};

export default StateDetail;
