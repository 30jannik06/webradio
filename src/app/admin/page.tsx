"use client"
import { useEffect, useState } from 'react';

export default function Home() {
	const [dbStatus, setDbStatus] = useState('');

	useEffect(() => {
		const checkDbStatus = async () => {
			try {
				const response = await fetch('/api/db-status');
				const data = await response.json();
				setDbStatus(data.message);
			} catch (error) {
				setDbStatus('Fehler beim Abrufen des DB-Status');
			}
		};
		checkDbStatus();
	}, []);

	return (
		<div>
			<h1>{dbStatus}</h1>
		</div>
	);
}
