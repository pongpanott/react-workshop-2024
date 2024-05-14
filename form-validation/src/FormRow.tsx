import { Box } from '@mui/material';
import React from 'react';

const FormRow = ({ children }: { children: React.ReactNode }) => {
	return <Box sx={{ display: 'flex', gap: 2 }}>{children}</Box>;
};

export default FormRow;
