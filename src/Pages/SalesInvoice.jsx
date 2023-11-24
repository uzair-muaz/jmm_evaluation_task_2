import React, { useState } from 'react';

import { useNavigate } from 'react-router';

import styled from '@emotion/styled';
import { Add } from '@mui/icons-material';
import {
  Box,
  Breadcrumbs,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';

import DataGrid from '../components/DataGrid';
import FloatingButtons from '../components/FloatingButtons';

const tabsArray = ['All', 'Tax', 'Simplified'];

const SalesInvoice = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainContainer>
      <BreadcrumbsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <BreadcrumbText color={'#2681C1'}>Sales</BreadcrumbText>
          <BreadcrumbText>Sales Invoice</BreadcrumbText>
        </Breadcrumbs>

        <CustomStack>
          <SearchContainer>
            <img src="/BlueSearch.svg" alt="SearchIcon" />
            <SearchBar placeholder="Search" />
          </SearchContainer>
          <CreateButton
            onClick={() => {
              navigate('/sales/create-sales-invoice');
            }}
          >
            Create Invoice <Add sx={{ fontSize: '14px', color: 'white' }} />
          </CreateButton>
        </CustomStack>
      </BreadcrumbsContainer>
      <TitleContainer>Sale Invoice</TitleContainer>

      <TabContainer>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="transparent"
        >
          {tabsArray.map((tab, index) => (
            <CustomTab key={index} label={tab} isActive={index === value} />
          ))}
        </Tabs>
      </TabContainer>
      <DataGrid />
      <FloatingButtons />
    </MainContainer>
  );
};

export default SalesInvoice;

const MainContainer = styled(Box)(() => ({
  padding: '31px 75px 23px 28px',
  width: '100%',
  height: '100%',
  position: 'relative'
}));
const BreadcrumbsContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center'
}));
const CustomStack = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '20px'
}));
const CreateButton = styled(Box)(() => ({
  width: '121px',
  height: '40px',
  background: '#2681C1',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3px',
  color: 'white',
  fontSize: '12px',
  fontWeight: '600',
  cursor: 'pointer',
  '&:hover': {
    background: '#1c4b80'
  }
}));
const BreadcrumbText = styled(Typography)(() => ({
  fontSize: '14px'
}));
const SearchContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '213px',
  height: '40px',
  gap: '1px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #DFDFDF',
  padding: '0px 10.5px',
  borderRadius: '6px'
}));
const SearchBar = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '40px',
    fontSize: '14px',
    color: '#565556',
    borderRadius: '2px'
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '0px solid #EFEFEF' // set the border width when the input is focused
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '0px solid #EFEFEF' // remove the border by default
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    border: '0px solid #EFEFEF' // set the border width on hover
  },
  flex: 1,
  maxWidth: '344px',
  borderRadius: '2px'
});
const TitleContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
  color: '#141433',
  fontSize: '21px',
  fontWeight: '800'
}));
const TabContainer = styled(Box)(() => ({
  padding: '6px',
  marginTop: '5px',
  borderRadius: '8px',
  width: '492px',
  maxHight: '52px',
  border: '1px solid #F3F3F3',
  backgroundColor: '#fff',
  marginBottom: '20px'
}));
const CustomTab = styled(Tab)(({ isActive }) => ({
  flex: 1,
  backgroundColor: isActive ? '#2681C1' : 'transparent',
  borderRadius: '6px',
  fontSize: '14px',
  color: isActive ? 'white !important' : '#7E7E7E',
  fontWeight: isActive ? '600' : '400',
  textTransform: 'none'
  // '&:hover': {
  //   background: '#1c4b80'
  // }
}));
