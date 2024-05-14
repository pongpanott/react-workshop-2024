import React from 'react';
import './Detail.css';
import WeatherDeatail from './WeatherDetail';
import { ReactComponent as WaterIcon } from '../../assets/water.svg';
import { ReactComponent as WindIcon } from '../../assets/wind.svg';
import { ReactComponent as HumidityIcon } from '../../assets/humidity.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';

type DetailProps = {
	detail: {
		daily_chance_of_rain: number;
		humidity: number;
		wind_kph: number;
		uv: number;
	};
};

const Detail = ({ detail }: DetailProps) => {
	const { daily_chance_of_rain, humidity, wind_kph, uv } = detail;

	return (
		<div className="detail">
			<WeatherDeatail
				icon={<WaterIcon />}
				title="Rain Chance"
				data={`${daily_chance_of_rain}%`}
			/>
			<WeatherDeatail
				icon={<WindIcon />}
				title="Wind"
				data={`${wind_kph} km/h`}
			/>
			<WeatherDeatail
				icon={<HumidityIcon />}
				title="Humidity"
				data={`${humidity}%`}
			/>
			<WeatherDeatail icon={<SunIcon />} title="UV Index" data={`${uv}`} />
		</div>
	);
};

export default Detail;
