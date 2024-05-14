import { Box, Typography } from '@mui/material';
import React from 'react';

const FormSection = ({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) => {
	return (
		<Box>
			<Typography variant="body1" sx={{ marginBottom: 1, fontWeight: 600 }}>
				{title}
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
				{children}
			</Box>
		</Box>
	);
};

export default FormSection;
