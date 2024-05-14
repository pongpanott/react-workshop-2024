import { Theme } from '@emotion/react';
import { Button, List, ListItem, Typography } from '@mui/material';
import { Box, SxProps } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { colors } from '..';
import AppHeader from '../components/AppHeader';
import { products } from '../constants/products';
import { useCartContext } from '../context/CartContext';
import { useCurrencyContext } from '../context/CurrencyContext';
import { Product } from '../types/product';

const ProductPrice = ({
	product,
	sx,
}: {
	product: Product;
	sx?: SxProps<Theme>;
}) => {
	const { currencyConverter } = useCurrencyContext();
	return (
		<Box marginTop={2} display="flex" gap={2} sx={sx}>
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
	);
};

const DetailPage = () => {
	const [product, setProduct] = useState<Product | null>(null);

	const params = useParams();
	const { handleAddToCart } = useCartContext();

	const getProduct = () => {
		const findProduct = products.find(
			(item) => item.id.toString() === params.id
		);

		if (findProduct) {
			setProduct(findProduct);
		}
	};

	useEffect(() => {
		getProduct();
	}, []);

	if (!product) return null;

	return (
		<>
			<AppHeader />

			<Box sx={{ display: { md: 'none' } }} padding={'24px'}>
				<Typography variant="h6">{product.name}</Typography>
				<ProductPrice
					product={product}
					sx={{ display: { xs: 'flex', md: 'none' } }}
				/>
			</Box>

			<Box
				display="flex"
				sx={{
					flexDirection: { xs: 'column', md: 'row' },
					marginTop: { md: 24 },
					columnGap: { md: 8, lg: 12 },
					paddingLeft: { xs: 0, md: 6 },
					paddingRight: { xs: 0, md: 6 },
				}}
				margin="auto"
				maxWidth="lg"
			>
				<Box
					sx={{
						width: { xs: '100%', md: '480px', lg: '600px' },
						height: { xs: '100%', md: '480px', lg: '600px' },
					}}
					flexShrink={0}
				>
					<img
						src={product.image}
						alt={product.name}
						width="100%"
						height="100%"
					/>
				</Box>

				<Box
					sx={{
						paddingLeft: { xs: 6, sm: 8, md: 0 },
						paddingRight: { xs: 6, sm: 8, md: 0 },
						paddingBottom: { xs: 6, sm: 8, md: 0 },
					}}
				>
					<Typography
						variant="h6"
						sx={{ display: { xs: 'none', md: 'block' } }}
					>
						{product.name}
					</Typography>
					<ProductPrice
						product={product}
						sx={{ display: { xs: 'none', md: 'flex' } }}
					/>
					<Typography variant="body1" marginTop={16}>
						{product.detail}
					</Typography>
					<br />
					<List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
						<ListItem disablePadding>
							<Typography
								variant="body1"
								sx={{
									marginBottom: 2,
									display: 'list-item',
								}}
							>
								{`Shown: ${
									product.specification.find((item) => item.label === 'shown')
										?.detail
								}`}
							</Typography>
						</ListItem>
						<ListItem disablePadding>
							<Typography
								variant="body1"
								sx={{
									display: 'list-item',
								}}
							>
								{`Style: ${
									product.specification.find((item) => item.label === 'style')
										?.detail
								}`}
							</Typography>
						</ListItem>
					</List>

					<Button
						color="info"
						variant="contained"
						sx={{
							cursor: 'pointer',
							display: { xs: 'none', md: 'block' },
							marginTop: { xs: 0, md: 12 },
							padding: 3,
							maxWidth: 320,
						}}
						onClick={() => handleAddToCart(product)}
						fullWidth
					>
						ADD TO CART
					</Button>
				</Box>
			</Box>

			<Box
				position="sticky"
				bottom={0}
				left={0}
				right={0}
				padding={5}
				sx={{
					background: colors.black,
					cursor: 'pointer',
					display: { md: 'none' },
				}}
				onClick={() => handleAddToCart(product)}
			>
				<Typography variant="subtitle1" color="white" textAlign="center">
					ADD TO CART
				</Typography>
			</Box>
		</>
	);
};

export default DetailPage;
