import React from 'react';
import { AppIcon, Flex, IconButton } from 'components';
import Banner from './banner';
import MovieExplore from './homePageSection/MovieExplore';
import StreamingDetail from './homePageSection/StreamingDetail';
import AskedQuestions from './homePageSection/AskedQuestions';
import SubscriptionDetail from './homePageSection/SubscriptionDetail';
import FreeTrail from './homePageSection/FreeTrail';
import { useMediaSize } from 'hooks';

const HomePage = () => {
	const { isMobile, isLaptop, isDesktop } = useMediaSize();

	return (
		<div>
			<Banner />
			<div>
				<div style={{ marginBottom: '50px' }}>first section</div>
				<Flex flexDirection="column" gap={isMobile ? 80 : isLaptop ? 120 : 150}>
					<MovieExplore />
					<StreamingDetail />
					<AskedQuestions />
					<SubscriptionDetail />
					<FreeTrail />
				</Flex>
			</div>

			<IconButton
				icon={AppIcon.HAND_THUMP_UP_OUTLINE}
				onClick={() => alert('icon button clicked')}
			/>
		</div>
	);
};

export default HomePage;
