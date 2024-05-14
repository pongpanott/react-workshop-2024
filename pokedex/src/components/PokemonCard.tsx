import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../types/pokemon';
import TypeTag from './TypeTag';

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
	const navigate = useNavigate();

	return (
		<div
			className="w-[220px] cursor-pointer"
			onClick={() => navigate(`/${pokemon.id}`)}
		>
			<img
				src={pokemon.image}
				alt={pokemon.name}
				className="w-[220px] h-[220px]"
			/>
			<div className="px-2 mt-4">
				<p className="text-neutral-400 text-sm">{`#${pokemon.id
					.toString()
					.padStart(4, '0')}`}</p>
				<p className="font-semibold text-xl">{pokemon.name.toUpperCase()}</p>
				<div className="gap-x-1 flex mt-1">
					{pokemon.types.map((type) => (
						<TypeTag key={type.type.name} type={type.type.name} />
					))}
				</div>
			</div>
		</div>
	);
};

export default PokemonCard;
