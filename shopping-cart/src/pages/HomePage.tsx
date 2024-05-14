import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import AppHeader from '../components/AppHeader';
import ProductCard from '../components/ProductCard';
import { products } from '../constants/products';
import { Product } from '../types/product';

const HomePage = () => {
	const [search, setSearch] = useState('');

	return (
		<>
			<AppHeader search={search} onChange={(e) => setSearch(e)} />
			<Container
				maxWidth="lg"
				sx={{
					paddingLeft: { xs: 6, sm: 8 },
					paddingRight: { xs: 6, sm: 8 },
					paddingBottom: { sx: 6, sm: 8 },
				}}
			>
				<Grid container spacing={{ xs: 6, md: 8 }}>
					{products
						.filter((item) => item.name.toLowerCase().includes(search))
						.map((product, index) => (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<ProductCard product={product as Product} key={product.id} />
							</Grid>
						))}
				</Grid>
			</Container>
		</>
	);
};

export default HomePage;
