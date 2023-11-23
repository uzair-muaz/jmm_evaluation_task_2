import React, { useState } from 'react';

import styled from '@emotion/styled';
import { Add, Receipt, ShoppingCart } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';

const FloatingButtons = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <MainContainer
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      isHovering={isHovering}
    >
      <CustomStack>
        <ButtonContainer>
          <ButtonRing>
            <Receipt sx={{ fontSize: '15px' }} />
          </ButtonRing>
          {isHovering && <ButtonText>Sale</ButtonText>}
        </ButtonContainer>
        <ButtonContainer>
          <ButtonRing>
            <ShoppingCart sx={{ fontSize: '15px' }} />
          </ButtonRing>
          {isHovering && <ButtonText>Purchase</ButtonText>}
        </ButtonContainer>
        <ButtonContainer>
          <ButtonRing>
            <Add sx={{ fontSize: '18px', fontWeight: '800' }} />
          </ButtonRing>
          {isHovering && <ButtonText>Extra</ButtonText>}
        </ButtonContainer>
      </CustomStack>
    </MainContainer>
  );
};

export default FloatingButtons;

const MainContainer = styled(Box)(({ isHovering }) => ({
  position: 'absolute',
  right: '0px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 100,
  padding: '12px 8px',
  width: isHovering ? '142px' : '50px',
  transition: 'width 0.4s',
  height: '146px',
  background: '#FFFFFF',
  boxShadow: '0px 10px 20px #B7B7B71A',
  border: '1px solid #F1F1F1',
  borderRadius: '8px 0px 0px 8px'
}));
const CustomStack = styled(Stack)(() => ({
  gap: '11px'
}));
const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
}));
const ButtonText = styled(Box)(() => ({
  fontSize: '12px',
  color: '#141433'
}));
const ButtonRing = styled(Box)(() => ({
  width: '34px',
  height: '34px',
  background: '#2681C1',
  borderRadius: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  cursor: 'pointer',
  '&:hover': {
    background: '#1c4b80'
  }
}));
