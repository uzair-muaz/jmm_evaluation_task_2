import React from 'react';

import styled from '@emotion/styled';
import {
  ArrowBackIos,
  KeyboardArrowDownOutlined,
  NotificationsNoneOutlined,
  Search
} from '@mui/icons-material';
import { Badge, Box, Stack, TextField } from '@mui/material';

const Header = () => {
  return (
    <MainContainer>
      <CustomStack1>
        <BackButton>
          <ArrowBackIos sx={{ color: 'white', fontSize: '12px', ml: '4px' }} />
        </BackButton>

        <SearchContainer>
          <Search sx={{ fontSize: '18px' }} />
          <SearchBar placeholder="Search anything anywhere" />
        </SearchContainer>
      </CustomStack1>

      <CustomStack2>
        <DropdownBox>
          ENG <KeyboardArrowDownOutlined sx={{ fontSize: '12px' }} />
        </DropdownBox>

        <Badge
          sx={{
            '& .MuiBadge-dot': {
              backgroundColor: '#2681C1'
            }
          }}
          variant="dot"
          invisible={false}
        >
          <NotificationsNoneOutlined sx={{ fontSize: '27px' }} />
        </Badge>

        <LogoutButton>Logout</LogoutButton>
      </CustomStack2>
    </MainContainer>
  );
};

export default Header;

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: '80px',
  border: '1px solid e6e6e6',
  background: '#FBFBFB ',
  border: '1px solid #E6E6E6',
  padding: '10px 75px 10px 28px',
  width: '100%'
}));

const CustomStack1 = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '34px'
}));

const CustomStack2 = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '47px'
}));

const BackButton = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: '21px',
  width: '21px',
  background: '#2681C1 ',
  borderRadius: '6px'
}));
const LogoutButton = styled(Box)(() => ({
  width: '94px',
  height: '38px',
  background: '#F6F8F9',
  border: '1px solid #F2F2F2',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#9CB1BB',
  fontSize: '14px'
}));

const SearchContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '390px',
  height: '40px',
  gap: '5px',
  backgroundColor: '#F9F9F8',
  border: '1px solid #EFEFEF',
  padding: '0px 15px',
  borderRadius: '3px'
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

const DropdownBox = styled(Box)(() => ({
  width: '60px',
  height: '35px',
  background: '#FFFFFF',
  border: '1px solid #F2F2F2',
  borderRadius: '3px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#131332',
  fontSize: '12px',
  fontWeight: '600',
  gap: '2px',
  cursor: 'pointer'
}));
