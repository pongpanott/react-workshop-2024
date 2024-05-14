import React from 'react';
import { useParams } from 'react-router-dom';
import { mockFruits } from '../mock-fruits';

const FruitDetailPage = () => {
	const params = useParams();

	const fruitDetail = mockFruits.find((item) => item.name === params.name);

	if (!fruitDetail) return null;

	return (
		<div>
			<h3>{fruitDetail.title}</h3>
			<p>{fruitDetail.content}</p>
		</div>
	);
};

export default FruitDetailPage;
