import { Box, Button, Divider, Drawer, Typography } from '@mui/material';
import React from 'react';
import { useCartContext } from '../context/CartContext';
import CartProduct from './CartProduct';
import CloseIcon from '@mui/icons-material/Close';
import { useCurrencyContext } from '../context/CurrencyContext';

const CartDrawer = () => {
	const { isOpen, setIsOpen, cart, handleCheckOut } = useCartContext();
	const { currencyConverter } = useCurrencyContext();

	const totalPrice = cart.reduce(
		(sum, item) => sum + item.product.price * item.amount,
		0
	);
	const totalDiscount = cart
		.map((item) =>
			item.product.discount ? item.product.discount * item.amount : 0
		)
		.reduce((sum, item) => sum + item, 0);

	return (
		<Drawer
			anchor="right"
			open={isOpen}
			onClose={setIsOpen}
			ModalProps={{
				container: document.getElementById('drawer-container'),
				style: { position: 'absolute' },
				onClose: () => setIsOpen(false),
			}}
			PaperProps={{
				sx: {
					width: { xs: 375, sm: 480 },
				},
			}}
		>
			<Box
				sx={{
					height: '100vh',
					maxHeight: '100vh',
					overflow: 'hidden',
					paddingTop: { xs: 4, sm: 6 },
					paddingBottom: { xs: 4, sm: 6 },
				}}
			>
				<Box display="flex" flexDirection="column" height="100%">
					<Box
						onClick={() => setIsOpen(false)}
						sx={{
							paddingLeft: { xs: 4, sm: 6 },
							paddingRight: { xs: 4, sm: 6 },
							marginBottom: 2,
						}}
					>
						<CloseIcon />
					</Box>
					<Box
						flex={1}
						overflow="scroll"
						sx={{
							paddingLeft: { xs: 4, sm: 6 },
							paddingRight: { xs: 4, sm: 6 },
						}}
					>
						{cart.map((item) => (
							<CartProduct {...item} key={item.product.id} />
						))}
					</Box>

					<Box
						sx={{
							paddingLeft: { xs: 4, sm: 6 },
							paddingRight: { xs: 4, sm: 6 },
						}}
					>
						<Divider
							sx={{
								marginTop: 4,
								marginBottom: 4,
							}}
						/>
					</Box>

					<Box
						display="flex"
						flexDirection="column"
						gap={1}
						sx={{
							paddingLeft: { xs: 4, sm: 6 },
							paddingRight: { xs: 4, sm: 6 },
						}}
					>
						<Box display="flex" justifyContent="between" width="100%">
							<Typography flex={1} fontWeight={500} color="grey">
								Total
							</Typography>
							<Typography fontWeight={600}>
								{currencyConverter(totalPrice)}
							</Typography>
						</Box>

						<Box display="flex" justifyContent="between" width="100%">
							<Typography flex={1} fontWeight={500} color="grey">
								Discount
							</Typography>
							<Typography fontWeight={600} color="error">
								{currencyConverter(totalDiscount)}
							</Typography>
						</Box>

						<Divider />

						<Box display="flex" justifyContent="between" width="100%">
							<Typography flex={1} fontWeight={500}>
								Summary
							</Typography>
							<Typography fontWeight={600} color="primary">
								{currencyConverter(totalPrice - totalDiscount)}
							</Typography>
						</Box>

						<Button onClick={handleCheckOut}>Checkout</Button>
					</Box>
				</Box>
			</Box>
		</Drawer>
	);
};

export default CartDrawer;
