import React from 'react';
import SkeletonLoading from './SkeletonLoading';

const PokemonCardLoading = () => {
	return (
		<div>
			<SkeletonLoading width={220} height={220} />
			<div className="px-2 mt-4">
				<SkeletonLoading height={20} />
				<SkeletonLoading height={28} />
				<div className="mt-1">
					<SkeletonLoading height={18} />
				</div>
			</div>
		</div>
	);
};

export default PokemonCardLoading;
