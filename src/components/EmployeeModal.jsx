import React from 'react';

import moment from 'moment';

import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const MainContainer = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#FFFFFF',
  border: '1px solid #E9E9E9',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '455px',
  height: '437px',
  padding: '0px 24.5px'
}));
const ModalHeader = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '58px'
}));
const HeaderTitle = styled(Box)(() => ({
  fontSize: '16px',
  color: '#141433',
  fontWeight: '500'
}));
const SeparatorLine = styled(Box)(() => ({
  width: '100%',
  height: '1px',
  background: '#E9E9E9'
}));
const Name = styled(Box)(() => ({
  fontSize: '16px',
  color: '#141433',
  fontWeight: '600'
}));
const LightText = styled(Typography)(() => ({
  fontSize: '12px',
  color: '#989898',
  fontWeight: '400'
}));
const DarkText = styled(Typography)(() => ({
  fontSize: '14px',
  color: '#141433',
  fontWeight: '400'
}));
const TextContainer = styled(Box)(({ isAddress = false }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  width: isAddress ? '100%' : '50%'
}));

const EmployeeModal = ({ employeeDetails, closeModal }) => {
  const { name, id, address, created_at, updated_at, designation, contact } =
    employeeDetails;
  return (
    <MainContainer>
      <ModalHeader>
        <HeaderTitle>Employee Detail</HeaderTitle>
        <img
          src="/Cross.svg"
          alt="cross"
          style={{ cursor: 'pointer' }}
          onClick={closeModal}
        />
      </ModalHeader>
      <SeparatorLine />

      <TextContainer sx={{ marginTop: '17px' }}>
        <Name>{name}</Name>
        <LightText>Id:{id}</LightText>
      </TextContainer>

      <Box sx={{ display: 'flex', marginTop: '17px' }}>
        <TextContainer>
          <LightText>Designation</LightText>
          <DarkText>{designation}</DarkText>
        </TextContainer>
        <TextContainer>
          <LightText>Contact</LightText>
          <DarkText>{contact}</DarkText>
        </TextContainer>
      </Box>

      <Box sx={{ display: 'flex', marginTop: '36px' }}>
        <TextContainer>
          <LightText>Created at</LightText>
          <DarkText>{moment(created_at).format('DD/MM/YYYY')}</DarkText>
        </TextContainer>
        <TextContainer>
          <LightText>Updated at</LightText>
          <DarkText>{moment(updated_at).format('DD/MM/YYYY')}</DarkText>
        </TextContainer>
      </Box>

      <TextContainer isAddress={true} sx={{ marginTop: '36px' }}>
        <LightText>Address</LightText>
        <DarkText>{address}</DarkText>
      </TextContainer>
    </MainContainer>
  );
};

export default EmployeeModal;
