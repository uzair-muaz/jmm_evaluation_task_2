import React from 'react';

import styled from '@emotion/styled';
import { Box } from '@mui/material';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function DashboardWrapper({ children }) {
  return (
    <>
      <AppContainer>
        <Sidebar />
        <MainSection>
          <Header />
          <ChildrenSection>{children}</ChildrenSection>
        </MainSection>
      </AppContainer>
    </>
  );
}

export default DashboardWrapper;

const AppContainer = styled('main')(() => ({
  display: 'flex',
  flexDirection: 'row',
  background: '#FBFBFB',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh'
}));
const MainSection = styled('section')(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: 'red',
  height: '100%'
}));
const ChildrenSection = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: 'green',
  width: '100%',
  height: '100%'
}));
