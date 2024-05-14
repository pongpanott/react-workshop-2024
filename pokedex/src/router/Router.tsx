import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PokemonDetail from '../pages/pokemonDetail/PokemonDetail';

const Router = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<div className="max-w-[1024px] py-8 font-outfit min-h-screen mx-auto">
						<Outlet />
					</div>
				}
			>
				<Route index element={<HomePage />} />
				<Route path="/:id" element={<PokemonDetail />} />
			</Route>
		</Routes>
	);
};

export default Router;
