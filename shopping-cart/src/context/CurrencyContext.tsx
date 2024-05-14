import React, { createContext, useContext, useState } from 'react';

export enum Currency {
	USD = 'USD',
	THB = 'THB',
}

type CurrencyContextProps = {
	currency: Currency;
	setCurrency: (value: Currency) => void;
	currencyConverter: (value: number) => string;
};

type CurrencyProviderProps = { children: React.ReactNode };

const CurrencyContext = createContext<CurrencyContextProps>(
	{} as CurrencyContextProps
);

const CurrencyProvider = ({ children }: CurrencyProviderProps) => {
	const [currency, setCurrency] = useState(Currency.USD);

	const toThb = (input: number) =>
		new Intl.NumberFormat('th-TH', {
			style: 'currency',
			currency: 'THB',
			maximumFractionDigits: 0,
			minimumFractionDigits: 0,
		}).format(Math.ceil(input * 36));

	const currencyConverter = (input: number) => {
		if (currency === Currency.THB) {
			return toThb(input);
		} else {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(input);
		}
	};

	return (
		<CurrencyContext.Provider
			value={{
				currency,
				setCurrency,
				currencyConverter,
			}}
		>
			{children}
		</CurrencyContext.Provider>
	);
};

export const useCurrencyContext = () => useContext(CurrencyContext);

export default CurrencyProvider;
