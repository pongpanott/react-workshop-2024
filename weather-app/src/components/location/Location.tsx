import './Location.css';
import { ReactComponent as MapMarker } from '../../assets/map-marker.svg';
import { LegacyRef } from 'react';

type LocationProps = {
	location: string;
	searchLocation: string;
	searchRef: LegacyRef<HTMLParagraphElement> | null;
};

const Location = ({ location, searchLocation, searchRef }: LocationProps) => {
	return (
		<div className="location-container">
			<MapMarker />
			<p ref={searchRef}>
				{searchLocation.length > 0 ? searchLocation : location}
			</p>
		</div>
	);
};

export default Location;
