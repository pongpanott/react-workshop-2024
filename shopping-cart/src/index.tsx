import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import CartProvider from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import CurrencyProvider from './context/CurrencyContext';

export const colors = {
	black: '#131313',
};

const theme = createTheme({
	typography: {
		fontFamily: 'Ubuntu',
		h4: {
			color: colors.black,
		},
		h6: {
			fontSize: 20,
			fontWeight: 600,
			color: colors.black,
		},
		body1: {
			fontSize: 18,
			color: colors.black,
		},
		body2: {
			fontSize: 16,
			color: colors.black,
		},
		subtitle1: {
			fontSize: 18,
			fontWeight: 600,
		},
		button: {
			fontSize: 16,
		},
	},
	palette: {
		common: {
			black: colors.black,
		},
		text: { primary: colors.black },
		info: { main: colors.black, light: colors.black, dark: colors.black },
	},
	spacing: 4,
});
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CurrencyProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</CurrencyProvider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
