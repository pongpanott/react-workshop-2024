import { Badge, Box, TextField, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CartDrawer from './CartDrawer';
import CurrenctSelector from './CurrenctSelector';

type AppHeaderProps = { search?: string; onChange?: (value: string) => void };

const AppHeader = ({ search, onChange }: AppHeaderProps) => {
	const { cart, setIsOpen } = useCartContext();
	const navigate = useNavigate();

	return (
		<>
			<Box
				paddingTop={7}
				paddingBottom={7}
				paddingLeft={{ xs: 6, sm: 8 }}
				paddingRight={{ xs: 6, sm: 8 }}
				zIndex={100}
				position="sticky"
				top={0}
				sx={{
					background: 'white',
				}}
			>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					alignContent="center"
					gap={4}
					margin="auto"
					sx={{
						flexDirection: { xs: onChange ? 'column' : 'row', sm: 'row' },
					}}
					maxWidth="xl"
				>
					<Typography
						variant="h3"
						fontWeight={600}
						onClick={() => navigate('/')}
						sx={{ cursor: 'pointer' }}
					>
						Nike
					</Typography>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
						gap={4}
						sx={{ width: { xs: '100%', sm: 360 } }}
					>
						{onChange ? (
							<TextField
								placeholder="search"
								size="small"
								sx={{ width: '100%' }}
								value={search}
								onChange={(e) => onChange(e.target.value)}
							/>
						) : null}

						<CurrenctSelector />

						<Badge
							badgeContent={cart.reduce((sum, item) => sum + item.amount, 0)}
							color="primary"
							sx={{ cursor: 'pointer' }}
							onClick={() => {
								setIsOpen(true);
							}}
						>
							<ShoppingCartIcon color="action" />
						</Badge>
					</Box>
				</Box>
			</Box>
			<CartDrawer />
		</>
	);
};

export default AppHeader;
