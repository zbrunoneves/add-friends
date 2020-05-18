import { useState, useEffect } from 'react';

export const useFecthData = (url, callback) => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(async () => {
		setIsLoading(true);

		const response = await fetch(url);
		const value = await response.json();
		const [item] = value.results;

		setData(callback(item));

		setIsLoading(false);

	}, []);

	return { data, isLoading }
}