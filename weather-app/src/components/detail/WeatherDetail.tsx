import React from 'react';
import './Detail.css';

type WeatherDetailProps = {
	icon: React.ReactNode;
	title: string;
	data: string;
};

const WeatherDeatail = ({ icon, title, data }: WeatherDetailProps) => {
	return (
		<div className="detail-container">
			{icon}
			<div>
				<p className="detail-header">{title}</p>
				<p className="detail-data">{data}</p>
			</div>
		</div>
	);
};

export default WeatherDeatail;
