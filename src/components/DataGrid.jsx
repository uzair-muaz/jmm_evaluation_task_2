import React, { useState } from 'react';

import styled from '@emotion/styled';
import {
  ArrowBackIos,
  ArrowForwardIos,
  Send,
  UnfoldMoreRounded
} from '@mui/icons-material';
import { Box, Grid, Stack, Typography } from '@mui/material';

const headingArray = [
  'Invoice Id',
  'Customer Name',
  'Invoice Type',
  'Grand Total',
  'Issue Date',
  'Status'
];
const dataArray = [
  [
    'SIN-010',
    'John Doe',
    'Simplified Tax',
    'SAR 1,000',
    '12-09-2021',
    'Cleared'
  ],
  [
    'SIN-010',
    'John Doe',
    'Simplified Tax',
    'SAR 1,000',
    '12-09-2021',
    'Reported'
  ],
  [
    'SIN-010',
    'John Doe',
    'Simplified Tax',
    'SAR 1,000',
    '12-09-2021',
    'Unreported'
  ]
];

const tempArray = ['1', '2', '0', '1', '2', '0', '1', '2', '0', '1'];

const DataGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log('currentPage', currentPage);
  return (
    <MainContainer>
      <TitleContainer>
        <TotalCount>Total 215</TotalCount>
        <NewCount>(15 new)</NewCount>
      </TitleContainer>

      <CustomStack>
        <Grid container>
          {headingArray.map(heading => (
            <Grid item xs={2}>
              <HeadingTitle>
                {heading} <UnfoldMoreRounded sx={{ fontSize: '15px' }} />
              </HeadingTitle>
            </Grid>
          ))}
        </Grid>
        {tempArray.map((item, index) => (
          <Grid container key={index}>
            {dataArray[item].map((heading, subIndex) => (
              <Grid item xs={2} key={subIndex}>
                {subIndex === 0 ? (
                  <InvoiceIdText>{heading}</InvoiceIdText>
                ) : subIndex === dataArray[item].length - 1 ? (
                  <StatusText isUncleared={heading === 'Unreported'}>
                    {heading}
                    {heading === 'Unreported' && (
                      <Send
                        sx={{
                          fontSize: '15px',
                          color: '#2681C1',
                          cursor: 'pointer'
                        }}
                      />
                    )}
                  </StatusText>
                ) : (
                  <GridDataText>{heading}</GridDataText>
                )}
              </Grid>
            ))}
          </Grid>
        ))}
      </CustomStack>

      <PaginationContainer>
        <PaginationText>
          Currently at Page: {currentPage} out of 26
        </PaginationText>

        <Stack gap={1} direction={'row'}>
          <PageButtonContainer>
            <PageButton
              isDisabled={currentPage === 1 ? true : false}
              onClick={() => {
                if (currentPage !== 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            >
              <ArrowBackIos sx={{ fontSize: '12px', ml: '5px' }} />
            </PageButton>
            <PageButtonText>Prev</PageButtonText>
          </PageButtonContainer>

          <PageButtonContainer>
            <PageButtonText>Next</PageButtonText>
            <PageButton
              isDisabled={currentPage === 26 ? true : false}
              onClick={() => {
                if (currentPage !== 26) {
                  setCurrentPage(currentPage + 1);
                }
              }}
            >
              <ArrowForwardIos sx={{ fontSize: '12px' }} />
            </PageButton>
          </PageButtonContainer>
        </Stack>
      </PaginationContainer>
    </MainContainer>
  );
};

export default DataGrid;

const MainContainer = styled(Box)(() => ({
  padding: '10px 20px',
  borderRadius: '8px',
  width: '100%',
  border: '1px solid #E9E9E9',
  boxShadow: '0px 10px 20px #DCDCDC33',
  backgroundColor: '#fff'
}));
const TitleContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '19px',
  alignItems: 'center'
}));
const TotalCount = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#141433'
}));
const NewCount = styled(Typography)(() => ({
  fontSize: '18px',
  color: '#141433'
}));
const HeadingTitle = styled(Typography)(() => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#141433'
}));
const CustomStack = styled(Stack)(() => ({
  gap: '30px',
  marginTop: '22px'
}));
const StatusText = styled(Typography)(({ isUncleared }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  fontSize: '14px',
  color: isUncleared ? '#FF0057' : '#26B716'
}));
const GridDataText = styled(Typography)(() => ({
  fontSize: '14px',
  color: '#141433'
}));
const InvoiceIdText = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#2681C1',
  textDecoration: 'underline',
  cursor: 'pointer'
}));
const PaginationContainer = styled(Box)(() => ({
  marginTop: '21px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  gap: '19px'
}));

const PaginationText = styled(Typography)(() => ({
  fontSize: '12px',
  color: '#9A9A9A'
}));
const PageButtonContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px'
}));
const PageButton = styled(Box)(({ isDisabled }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
  width: '24px',
  height: '24px',
  background: '#FFFFFF',
  boxShadow: '0px 3px 10px #0000000D',
  border: '1px solid #E9E9E9',
  color: isDisabled ? 'gray' : 'black',
  cursor: isDisabled ? 'not-allowed' : 'pointer',
  transition: 'color 0.3s, background-color 0.3s',
  '&:hover': {
    color: isDisabled ? 'gray' : 'white',
    backgroundColor: !isDisabled && '#2681C1'
  }
}));
const PageButtonText = styled(Typography)(() => ({
  fontSize: '12px',
  color: '#040404'
}));
