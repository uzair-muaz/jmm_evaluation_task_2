import React from 'react';

import { useLocation, useNavigate } from 'react-router';

import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';

const sidebarLinks = [
  {
    imgURL: '/Dashboard.svg',
    label: 'Dashboard'
  },
  {
    imgURL: '/WhiteSales.svg',
    label: 'Sales'
  },
  {
    imgURL: '/Purchases.svg',
    label: 'Purchases'
  },
  {
    imgURL: '/Inventory.svg',
    label: 'Inventory'
  },
  {
    imgURL: '/Purchases.svg',
    label: 'POS'
  },
  {
    imgURL: '/Reports.svg',
    label: 'Reports'
  },
  {
    imgURL: '/Accounts.svg',
    label: 'Accounts'
  },
  {
    imgURL: '/Settings.svg',
    label: 'Settings'
  }
];

const salesLinks = [
  {
    route: '/sales/customers',
    label: 'Customers'
  },
  {
    route: '/sales/sales-invoice',
    label: 'Sales Invoice'
  },
  {
    route: '/sales/sales-quotes',
    label: 'Sales Quotes'
  },
  {
    route: '/sales/commission',
    label: 'Commission'
  }
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentURL = location.pathname;
  return (
    <MainContainer>
      <LogoImage src="/SidebarLogo.svg" alt="logo" />

      <LinksContainer>
        {sidebarLinks.map((link, index) => {
          const isActive = index === 1 ? true : false;
          return (
            <Box>
              <LinkBox isActive={isActive}>
                {index === 1 ? (
                  <ArrowImage src="/WhiteArrowDown.svg" alt="arrow-down" />
                ) : index !== 0 ? (
                  <ArrowImage src="/GreyArrowRight.svg" alt="side-arrow" />
                ) : null}
                <LinkImage src={link.imgURL} alt={link.label} />
                <LinkName isActive={isActive}>{link.label}</LinkName>
              </LinkBox>

              {index === 1 && (
                <SubLinksContainer>
                  {salesLinks.map((subLink, index) => (
                    <SubLink isActive={index === 1 ? true : false}>
                      {subLink.label}
                    </SubLink>
                  ))}
                </SubLinksContainer>
              )}
            </Box>
          );
        })}
      </LinksContainer>
    </MainContainer>
  );
};

export default Sidebar;

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '205px',
  minHeight: '100vh',
  boxSizing: 'border-box',
  border: '1px solid #E9E9E9',
  padding: '26px 15px'
}));
const LogoImage = styled('img')(() => ({
  width: '146px',
  height: '49px'
}));
const LinksContainer = styled(Stack)(() => ({
  gap: '10px',
  marginTop: '47.7px'
}));
const SubLinksContainer = styled(Stack)(() => ({
  gap: '10px',
  marginTop: '10px'
}));
const LinkBox = styled(Box)(({ isActive }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  background: isActive ? '#2681c1' : 'transparent',
  borderRadius: '6px',
  width: '173px',
  height: '39px',
  padding: '11.2px',
  cursor: 'pointer'
}));
const LinkImage = styled('img')(() => ({
  width: '16.35px',
  height: '16.35px'
}));
const ArrowImage = styled('img')(() => ({
  width: '5px',
  height: '7px'
}));
const LinkName = styled(Typography)(({ isActive }) => ({
  fontSize: '16px',
  color: isActive ? 'white' : '#728694'
}));
const SubLink = styled(Typography)(({ isActive }) => ({
  fontSize: '16px',
  color: isActive ? '#2681C1' : '#728694',
  fontWeight: isActive ? '600' : '400',
  marginLeft: '35px',
  cursor: 'pointer'
}));
