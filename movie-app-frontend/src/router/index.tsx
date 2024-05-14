import { Layout } from 'components';
import HomePage from '../pages/home/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="/movies" element={<>movies and shows</>} />
				<Route path="/movies/:id" element={<>movies detail</>} />
			</Route>
		</Routes>
	);
};

export default AppRoute;
