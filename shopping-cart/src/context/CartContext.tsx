import { Alert, Snackbar } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types/product';

type CartContextPros = {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	cart: { product: Product; amount: number }[];
	handleAddToCart: (value: Product) => void;
	handleRemoveFromCart: (value: Product) => void;
	handleCheckOut: () => void;
};

type CartProviderProps = { children: React.ReactNode };

const CartContext = createContext<CartContextPros>({} as CartContextPros);

const CartProvider = ({ children }: CartProviderProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [cart, setCart] = useState<{ product: Product; amount: number }[]>([]);
	const [isToastOpen, setIsToastOpen] = useState(false);

	const handleAddToCart = (product: Product) => {
		if (cart.length === 0) {
			setCart([{ product, amount: 1 }]);
		} else {
			const findCurProduct = cart.find(
				(item) => item.product.id === product.id
			);

			if (findCurProduct) {
				const updatedCartAmount = cart.map((item) => {
					if (item.product.id === findCurProduct.product.id) {
						return { product: item.product, amount: item.amount + 1 };
					} else {
						return item;
					}
				});

				setCart(updatedCartAmount);
			} else {
				setCart((prev) => [...prev, { product, amount: 1 }]);
			}
		}
	};

	const handleRemoveFromCart = (product: Product) => {
		const findCurProduct = cart.find((item) => item.product.id === product.id);

		if (findCurProduct) {
			if (findCurProduct.amount === 1) {
				const updatedRemoveFromCart = cart.filter(
					(item) => item.product.id !== product.id
				);

				setCart(updatedRemoveFromCart);
			} else {
				const updateCartAmount = cart.map((item) => {
					if (item.product.id === findCurProduct.product.id) {
						return { product: item.product, amount: item.amount - 1 };
					} else {
						return item;
					}
				});

				setCart(updateCartAmount);
			}
		}
	};

	const handleCheckOut = () => {
		if (cart.length > 0) {
			setCart([]);
			setIsOpen(false);

			setTimeout(() => {
				setIsToastOpen(true);
			}, 200);
		}
	};

	return (
		<CartContext.Provider
			value={{
				isOpen,
				setIsOpen,
				cart,
				handleAddToCart,
				handleRemoveFromCart,
				handleCheckOut,
			}}
		>
			{children}

			<Snackbar
				open={isToastOpen}
				autoHideDuration={2000}
				onClose={() => setIsToastOpen(false)}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert
					onClose={() => setIsToastOpen(false)}
					severity="success"
					variant="standard"
					sx={{ width: '100%' }}
				>
					Thank you for your purchase!
				</Alert>
			</Snackbar>
		</CartContext.Provider>
	);
};

export const useCartContext = () => useContext(CartContext);

export default CartProvider;
