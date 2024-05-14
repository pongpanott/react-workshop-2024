import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SearchErrorPlaceholder from '../../components/SearchErrorPlaceholder';
import TypeTag from '../../components/TypeTag';
import { apiService } from '../../service';
import { Pokemon } from '../../types/pokemon';
import CommonDetail from './CommonDetail';
import PaginationButton from './PaginationButton';
import StateDetail from './StateDetail';

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
	<p className="text-xl mb-2 text-neutral-400">{children}</p>
);

const PokemonDetail = () => {
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);
	const [weaknesses, setWeaknesses] = useState<{ name: string }[][]>();
	const [totalPokemon, setTotalPokemon] = useState(0);
	const [isError, setIsError] = useState(false);

	const params = useParams();
	const navigate = useNavigate();

	const getPokemonDetail = async ({ search }: { search: string }) => {
		setIsError(false);
		apiService
			.searchPokemon({
				search,
			})
			.then((response) => {
				setPokemon(response);

				return response.types;
			})
			.then((types) => {
				const typeArray = types.map((type) => {
					return fetch(type.type.url).then((typeRes) =>
						typeRes.json().then((dataJson) => dataJson)
					);
				});

				return Promise.all<
					Promise<{
						damage_relations: {
							double_damage_from: {
								name: string;
							}[];
						};
					}>
				>(typeArray);
			})
			.then((typeRes) => {
				const weaknesses = typeRes.map(
					(item) => item.damage_relations.double_damage_from
				);

				setWeaknesses(weaknesses);
			})
			.catch((_) => {
				setIsError(true);
			});
	};

	const getPagination = async () => {
		apiService.getPagination().then((res) => setTotalPokemon(res.count));
	};

	useEffect(() => {
		getPokemonDetail({ search: params.id as string });
		getPagination();
	}, [params.id]);

	if (!pokemon) {
		return isError ? (
			<SearchErrorPlaceholder
				onClick={() => navigate('/')}
				subTitle="← Back to Homepage"
			/>
		) : null;
	}

	return (
		<div className="mt-[140px]">
			<div className="flex items-center justify-between w-[700px] mx-auto">
				{pokemon.id - 1 > 0 ? (
					<PaginationButton onClick={() => navigate(`/${pokemon.id - 1}`)}>
						←
					</PaginationButton>
				) : (
					<div />
				)}
				<h1 className="text-4xl">
					{pokemon.name.toUpperCase()}
					<span className="text-neutral-400 ml-2">{`#${pokemon.id
						.toString()
						.padStart(4, '0')}`}</span>
				</h1>
				{pokemon.id - 1 !== totalPokemon ? (
					<PaginationButton onClick={() => navigate(`/${pokemon.id + 1}`)}>
						→
					</PaginationButton>
				) : (
					<div />
				)}
			</div>

			<div className="mt-[80px] flex gap-x-[72px]">
				<div>
					<img
						alt={pokemon.name}
						src={pokemon.image}
						className="w-[400px] h-[400px]"
					/>
				</div>

				<div className="flex flex-col gap-y-8 w-[400px]">
					<CommonDetail pokemon={pokemon} />

					<div>
						<SectionHeader>Type</SectionHeader>
						<div className="gap-x-1 flex-wrap flex mt-1">
							{pokemon.types.map((type) => (
								<TypeTag
									size="large"
									key={type.type.name}
									type={type.type.name}
								/>
							))}
						</div>
					</div>

					<div>
						<SectionHeader>Weakess</SectionHeader>
						<div>
							{weaknesses?.map((row, rowIndex) => (
								<div key={rowIndex} className="gap-1 mt-1 flex flex-wrap">
									{row.map((item) =>
										!pokemon?.types
											.map((type) => type.type.name)
											.includes(item.name) ? (
											<TypeTag size="large" key={item.name} type={item.name} />
										) : null
									)}
								</div>
							))}
						</div>
					</div>

					<div>
						<SectionHeader>Base Stats</SectionHeader>
						<StateDetail pokemon={pokemon} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonDetail;
