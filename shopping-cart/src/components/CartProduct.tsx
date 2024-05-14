import { Box, Button, Card, CardMedia, List, Typography } from '@mui/material';
import React from 'react';
import { useCartContext } from '../context/CartContext';
import { useCurrencyContext } from '../context/CurrencyContext';
import { Product } from '../types/product';

const CartProduct = ({
	product,
	amount,
}: {
	product: Product;
	amount: number;
}) => {
	const { handleAddToCart, handleRemoveFromCart } = useCartContext();
	const { currencyConverter } = useCurrencyContext();

	return (
		<List>
			<Card variant="outlined" sx={{ display: 'flex' }}>
				<CardMedia
					alt={product.name}
					src={product.image}
					component="img"
					sx={{
						width: { xs: 140, sm: 160 },
						height: { xs: 140, sm: 160 },
						flexShrink: 0,
					}}
				/>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="space-between"
					sx={{ width: '100%', padding: { xs: 2, sm: 3 } }}
				>
					<Box>
						<Typography variant="body2" fontWeight={600}>
							{product.name}
						</Typography>
						<Box display="flex" gap={1} marginTop={1}>
							{product.salePrice ? (
								<Typography variant="body2" fontWeight={600}>
									{currencyConverter(product.salePrice)}
								</Typography>
							) : null}
							<Typography
								variant="body2"
								fontWeight={product.salePrice ? 400 : 600}
								sx={{
									textDecoration: product.salePrice ? 'line-through' : 'none',
								}}
								color={product.salePrice ? 'grey' : 'neutral'}
							>
								{currencyConverter(product.price)}
							</Typography>
						</Box>
					</Box>

					<Box display="flex">
						<Button
							type="button"
							variant="outlined"
							size="small"
							onClick={() => handleRemoveFromCart(product)}
						>
							-
						</Button>
						<Typography
							sx={{ flex: 1 }}
							textAlign="center"
							alignContent="center"
						>
							{amount}
						</Typography>
						<Button
							type="button"
							variant="outlined"
							size="small"
							onClick={() => handleAddToCart(product)}
						>
							+
						</Button>
					</Box>
				</Box>
			</Card>
		</List>
	);
};

export default CartProduct;
