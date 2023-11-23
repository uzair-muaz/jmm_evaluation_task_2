import React from 'react';

import styled from '@emotion/styled';
import { Box } from '@mui/material';

const Header = () => {
  return <MainContainer>Header</MainContainer>;
};

export default Header;

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  height: '80px',
  border: '1px solid e6e6e6',
  background: '#FBFBFB ',
  border: '1px solid #E6E6E6',
  padding: '26px 15px'
}));
