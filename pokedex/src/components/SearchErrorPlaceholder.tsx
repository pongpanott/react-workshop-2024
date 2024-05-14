import React from 'react';

const SearchErrorPlaceholder = ({
	onClick,
	subTitle,
}: {
	onClick?: () => void;
	subTitle: string;
}) => {
	return (
		<div className="flex justify-center my-[200px]">
			<div className="rounded border-2 border-red-400 py-[10px] px-5">
				<p className="text-lg text-red-600">No Pokémon Matched You Search!</p>
				<p
					className={`${
						onClick ? 'underline' : 'none'
					} text-slate-600 cursor-pointer text-md mt-2`}
					onClick={onClick}
				>
					{subTitle}
				</p>
			</div>
		</div>
	);
};

export default SearchErrorPlaceholder;
