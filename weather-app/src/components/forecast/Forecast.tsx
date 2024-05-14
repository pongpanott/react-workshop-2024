import React from 'react';
import './Forecast.css';

type ForecastProps = {
	forecast: {
		time: string;
		chance_of_rain: string;
		condition: {
			code: number;
			icon: string;
			text: string;
		};
		temp_c: number;
	}[];
};

const Forecast = ({ forecast }: ForecastProps) => {
	return (
		<div className="forecast">
			{forecast.map((item, index) => (
				<div key={index} className="forecast-item">
					<p className="forecast-time">{item.time.split(' ')[1]}</p>
					<div>
						<p className="chance-of-rain">{`${item.chance_of_rain}%`}</p>
						<img
							alt={item.condition.text}
							src={item.condition.icon}
							className="weather-icon"
							style={{ objectFit: 'contain' }}
						/>
					</div>
					<p className="forecast-temp">
						{`${Math.floor(item.temp_c)}°`}
						<sup>c</sup>
					</p>
				</div>
			))}
		</div>
	);
};

export default Forecast;
