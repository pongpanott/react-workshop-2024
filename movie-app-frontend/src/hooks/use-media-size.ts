import { useMedia } from 'react-use';

export const useMediaSize = () => {
	return {
		isMobile: useMedia('(max-width: 1439px)'),
		isLaptop: useMedia('(min-width: 1440px) and (max-width: 1919px)'),
		isDesktop: useMedia('(min-width: 1920px)'),
	};
};
