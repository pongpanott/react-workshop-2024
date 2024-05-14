export type Product = {
	id: number;
	name: string;
	gender: string;
	price: number;
	salePrice: number | null;
	discount: number | null;
	image: string;
	detail: string;
	specification: [
		{
			label: 'shown';
			detail: string;
		},
		{ label: 'style'; detail: string }
	];
};
