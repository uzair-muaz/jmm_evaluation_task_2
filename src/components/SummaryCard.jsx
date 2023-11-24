import React from 'react';

import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';

const SummaryCard = () => {
  return (
    <MainContainer>
      <Title>Summary</Title>
      <CustomStack>
        <SummaryContainer>
          <Headings>
            Total
            <VAT>Exc Vat</VAT>
          </Headings>

          <Prices>
            500 <SAR>SAR</SAR>
          </Prices>
        </SummaryContainer>
        <SummaryContainer>
          <Headings>Vat Category</Headings>

          <Prices>
            500 <SAR>SAR</SAR>
          </Prices>
        </SummaryContainer>
        <SummaryContainer>
          <Headings>Discount%</Headings>

          <Prices>
            500 <SAR>SAR</SAR>
          </Prices>
        </SummaryContainer>
        <SummaryContainer>
          <Headings>Discount Amount</Headings>

          <Prices>
            500 <SAR>SAR</SAR>
          </Prices>
        </SummaryContainer>
        <SummaryContainer>
          <Headings>Taxable amount</Headings>

          <Prices>
            500 <SAR>SAR</SAR>
          </Prices>
        </SummaryContainer>
        <SummaryContainer>
          <Headings>VAT Total</Headings>

          <Prices>
            500 <SAR>SAR</SAR>
          </Prices>
        </SummaryContainer>
        <SummaryContainer>
          <Headings>Total</Headings>
          <Prices>
            500 <SAR>SAR</SAR>
          </Prices>
        </SummaryContainer>
      </CustomStack>

      <TotalContainer>
        <TotalHeadings>Total</TotalHeadings>

        <TotalPrices>
          500 <TotalSAR>SAR</TotalSAR>
        </TotalPrices>
      </TotalContainer>
    </MainContainer>
  );
};

export default SummaryCard;

const MainContainer = styled(Box)(() => ({
  padding: '20px 0px',
  background: '#F8F6F6',
  border: '1px solid #E9E9E9',
  borderRadius: '8px',
  width: '293px',
  height: '380px'
}));

const Title = styled(Typography)(() => ({
  marginLeft: '20px',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#141433'
}));
const Headings = styled(Typography)(() => ({
  fontSize: '15px',
  fontWeight: 'bold',
  color: '#141433'
}));
const Prices = styled(Typography)(() => ({
  fontSize: '15px',
  fontWeight: '600',
  color: '#141433'
}));
const SAR = styled('span')(() => ({
  fontSize: '15px',
  fontWeight: '600',
  color: '#141433',
  marginLeft: '15px'
}));
const VAT = styled('span')(() => ({
  fontSize: '12px',
  fontWeight: '600',
  color: '#141433',
  marginLeft: '8px'
}));

const CustomStack = styled(Stack)(() => ({
  gap: '13px',
  marginTop: '15px',
  padding: '0px 20px'
}));
const SummaryContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));
const TotalContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#FFFFFF',
  marginTop: '20px',
  padding: '0px 20px',
  height: '30px'
}));
const TotalHeadings = styled(Typography)(() => ({
  fontSize: '15px',
  fontWeight: 'bold',
  color: '#2681C1'
}));
const TotalPrices = styled(Typography)(() => ({
  fontSize: '15px',
  fontWeight: '600',
  color: '#2681C1'
}));
const TotalSAR = styled('span')(() => ({
  fontSize: '15px',
  fontWeight: '600',
  color: '#2681C1',
  marginLeft: '15px'
}));
