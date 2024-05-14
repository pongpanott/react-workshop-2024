type FetchOptions = RequestInit & {
	baseUrl?: string;
};

type BaseFetchProps = {
	endpoint: string;
	options?: FetchOptions;
};

const baseUrl = '';

const baseFetch = async <T>({
	endpoint,
	options = {},
}: BaseFetchProps): Promise<T> => {
	const { headers, ...restOptions } = options;

	const url = `${baseUrl}${endpoint}`;

	const response = await fetch(url, {
		headers: {
			...headers,
			'Content-Type': 'application/json',
		},
		...restOptions,
	});

	return response.json();
};

export default baseFetch;
