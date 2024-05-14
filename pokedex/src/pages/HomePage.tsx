import React, { useEffect, useState } from 'react';
import { apiService } from '../service';
import { Pokemon } from '../types/pokemon';
import PokemonCard from '../components/PokemonCard';
import TextInput from '../components/TextInput';
import SearchErrorPlaceholder from '../components/SearchErrorPlaceholder';
import PokemonCardLoading from '../components/PokemonCardLoading';
import PokedexGrid from '../components/PokedexGrid';

const HomePage = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [offset, setOffset] = useState(0);
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	const [search, setSearch] = useState('');
	const [isError, setIsError] = useState(false);

	const getPokemons = async ({ currentOffset }: { currentOffset: number }) => {
		try {
			const pokeResponse = await apiService.getPokemons({
				offset: currentOffset,
				limit: 12,
			});

			setPokemons((prev) => [...prev, ...pokeResponse]);

			setOffset(offset + 12);
			setIsError(false);
			setIsLoading(false);
			setIsLoadingMore(false);
		} catch (_) {
			setIsLoading(false);
			setIsLoadingMore(false);
		}
	};

	const handleLoadMore = () => {
		setIsLoadingMore(true);
		getPokemons({ currentOffset: offset });
	};

	const handleResetPokedex = () => {
		setSearch('');
		setPokemons([]);
		getPokemons({ currentOffset: 0 });
	};

	const handleSearchPokemon = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();

			if (search) {
				setPokemons([]);
				setIsLoading(true);

				const response = await apiService.searchPokemon({ search });

				setTimeout(() => {
					setPokemons([response]);
					setSearch('');
					setIsLoading(false);
				}, 0);
			} else {
				if (pokemons.length <= 1) {
					handleResetPokedex();
				}
			}
		} catch (error) {
			setPokemons([]);
			setIsError(true);
		}
	};

	useEffect(() => {
		getPokemons({ currentOffset: offset });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="flex justify-between items-center mb-8">
				<button type="button">
					<h1 className="text-[32px]" onClick={handleResetPokedex}>
						Pokédex
					</h1>
				</button>
				<form
					className="flex items-center gap-x-2"
					onSubmit={(e) => handleSearchPokemon(e)}
				>
					<TextInput value={search} onChange={setSearch} />
					{isError ? (
						<button
							type="button"
							onClick={handleResetPokedex}
							className="bg-rose-500 text-white h-[34px] px-2 rounded"
						>
							Reset
						</button>
					) : (
						<button
							type="submit"
							className="bg-indigo-500 text-white h-[34px] px-2 rounded"
						>
							Search
						</button>
					)}
				</form>
			</div>

			<>
				{isError ? (
					<SearchErrorPlaceholder subTitle="Try to search with Pokémon name or number" />
				) : (
					<PokedexGrid>
						{isLoading ? (
							<>
								{Array.from({ length: 12 }).map((_, index) => (
									<PokemonCardLoading key={index} />
								))}
							</>
						) : (
							<>
								{pokemons.map((pokemon) => (
									<PokemonCard key={pokemon.id} pokemon={pokemon} />
								))}
							</>
						)}
					</PokedexGrid>
				)}

				<>
					{isLoadingMore ? (
						<PokedexGrid className="mt-12">
							<>
								{Array.from({ length: 12 }).map((_, index) => (
									<PokemonCardLoading key={index} />
								))}
							</>
						</PokedexGrid>
					) : (
						<>
							{pokemons.length > 1 ? (
								<div className="flex justify-center my-10">
									<button
										type="button"
										className="rounded text-white px-4 py-2 bg-slate-500"
										onClick={handleLoadMore}
									>
										Load more
									</button>
								</div>
							) : null}
						</>
					)}
				</>
			</>
		</>
	);
};

export default HomePage;
