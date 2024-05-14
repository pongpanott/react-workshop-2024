import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import AboutUsPage from '../pages/About';
import ContactPage from '../pages/Contact';
import FruitPage from '../pages/Fruit';
import FruitDetailPage from '../pages/FruitDetail';
import HomePage from '../pages/Home';

const Router = () => {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutUsPage />} />
				<Route path="/contact" element={<ContactPage />} />

				<Route path="/fruit" element={<FruitPage />}>
					<Route path="/fruit/:name" element={<FruitDetailPage />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;
