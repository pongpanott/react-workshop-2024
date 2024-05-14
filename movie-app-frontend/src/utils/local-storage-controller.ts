export const saveToStorage = <T>({
	key,
	value,
}: {
	key: string;
	value: T;
}): void => {
	try {
		const serializedValue: string = JSON.stringify(value);
		localStorage.setItem(key, serializedValue);
	} catch (error) {
		console.error('Error saving data to localStorage:', error);
	}
};

export const getFromStorage = <T>({ key }: { key: string }): T | null => {
	try {
		const serializedValue: string | null = localStorage.getItem(key);
		if (!serializedValue) return null;

		return JSON.parse(serializedValue) as T;
	} catch (error) {
		console.error('Error retrieving data from localStorage:', error);
		return null;
	}
};

export const removeFromStorage = ({ key }: { key: string }): void => {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		console.error('Error removing data from localStorage:', error);
	}
};
