import React from 'react';

import { Box } from '@mui/material';

const EmployeeModal = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3
  };

  return <Box sx={{ ...style }}> EmployeeModal</Box>;
};

export default EmployeeModal;
