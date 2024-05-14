import { useEffect, useRef, useState } from 'react';
import Detail from './components/detail/Detail';
import Forecast from './components/forecast/Forecast';
import Layout from './components/layout/Layout';
import Location from './components/location/Location';
import Weather from './components/weather/Weather';

function App() {
	const [location, setLocation] = useState('Thailand');
	const [searchLocation, setSearchLocation] = useState('');
	const [weather, setWeather] = useState({
		temp: 1,
		minTemp: 2,
		maxTemp: 3,
		condition: '',
		conditionIcon: '',
	});
	const [forecast, setForecast] = useState<
		{
			time: string;
			chance_of_rain: string;
			condition: {
				code: number;
				icon: string;
				text: string;
			};
			temp_c: number;
		}[]
	>([]);
	const [detail, setDetail] = useState<{
		daily_chance_of_rain: number;
		humidity: number;
		wind_kph: number;
		uv: number;
	}>({
		daily_chance_of_rain: 0,
		humidity: 0,
		wind_kph: 0,
		uv: 0,
	});

	const apiKey = 'replace you api key here!';

	const searchRef = useRef<HTMLParagraphElement>(null);

	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			enterSearch();
		} else if (event.key === 'Backspace') {
			deleteSearch();
		} else {
			switch (event.key) {
				case 'Shift':
				case 'Caplock':
				case 'Alt':
				case 'Meta':
				case 'Control':
					break;
				default:
					return concatSearch(event.key);
			}
		}
	};

	const concatSearch = (char: string) =>
		setSearchLocation((prev) => `${(prev += char)}`);

	const deleteSearch = () =>
		setSearchLocation((prev) => prev.substring(0, prev.length - 1));

	const enterSearch = () => {
		setLocation(searchRef.current ? searchRef.current.innerText : '');
		setSearchLocation('');
	};

	const fetchData = async () => {
		fetch(`${apiKey}&q=${location}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const { current, forecast } = data;
				const { forecastday } = forecast;
				const { day, hour } = forecastday[0];
				const { condition } = current;

				setWeather({
					temp: current.temp_c,
					minTemp: day.mintemp_c,
					maxTemp: day.maxtemp_c,
					condition: condition.text,
					conditionIcon: condition.icon,
				});
				setForecast(hour);
				setDetail({
					daily_chance_of_rain: day.daily_chance_of_rain,
					humidity: current.humidity,
					wind_kph: current.wind_kph,
					uv: current.uv,
				});
			})
			.catch((error) => console.log('error', error));
	};

	useEffect(() => {
		fetchData();
	}, [location]);

	useEffect(() => {
		window.addEventListener('keydown', (event) => handleKeyPress(event));

		return () => {
			window.removeEventListener('keydown', (event) => handleKeyPress(event));
		};
	}, []);

	return (
		<Layout>
			<Location
				location={location}
				searchLocation={searchLocation}
				searchRef={searchRef}
			/>
			<Weather weather={weather} />
			<Forecast forecast={forecast} />
			<Detail detail={detail} />
		</Layout>
	);
}

export default App;
