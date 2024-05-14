import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { useCurrencyContext } from '../context/CurrencyContext';
import { Product } from '../types/product';

const ProductCard = ({ product }: { product: Product }) => {
	const { handleAddToCart } = useCartContext();
	const { currencyConverter } = useCurrencyContext();
	const navigate = useNavigate();

	return (
		<Card onClick={() => navigate(`/${product.id}`)} sx={{ cursor: 'pointer' }}>
			<CardMedia
				component="img"
				image={product.image}
				alt={product.name}
				sx={{ width: '100%' }}
			/>
			<CardContent>
				<Typography variant="body1" fontWeight={600}>
					{product.name}
				</Typography>
				<Box display="flex" gap={2}>
					{product.salePrice ? (
						<Typography variant="body1" fontWeight={600} color="primary">
							{currencyConverter(product.salePrice)}
						</Typography>
					) : null}

					<Typography
						variant="body1"
						fontWeight={product.salePrice ? 400 : 600}
						color={product.salePrice ? 'grey' : 'neutral'}
						sx={{
							textDecoration: product.salePrice ? 'line-through' : 'none',
						}}
					>
						{currencyConverter(product.price)}
					</Typography>

					{product.discount ? (
						<Typography variant="body1" fontWeight={600} color="error">
							{`${product.discount}% Off`}
						</Typography>
					) : null}
				</Box>

				<Button
					type="button"
					variant="outlined"
					fullWidth
					sx={{ marginTop: 2 }}
					onClick={(e) => {
						e.stopPropagation();
						handleAddToCart(product);
					}}
				>
					add to cart
				</Button>
			</CardContent>
		</Card>
	);
};

export default ProductCard;
