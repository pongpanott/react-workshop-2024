import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';

const Router = () => {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="/:id" element={<DetailPage />} />
		</Routes>
	);
};

export default Router;
