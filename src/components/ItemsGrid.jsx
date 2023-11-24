import React, { useState } from 'react';

import { number } from 'yup';

import styled from '@emotion/styled';
import { Delete } from '@mui/icons-material';
import {
  Box,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography
} from '@mui/material';

const ItemsGrid = ({ items, addSelectedItem }) => {
  const [selectedItems, setSelectedItems] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <MainContainer>
      <TitleContainer>
        <Box sx={{ display: 'flex', gap: '5px' }}>
          <HeadingText>Total</HeadingText>
          <CountText>(15 new)</CountText>
        </Box>
        <RemoveText>
          <Delete />
          Remove all Items
        </RemoveText>
      </TitleContainer>

      <GridHeader>
        <GridHeaderContainer container>
          <GridHeaderItem item xs={2.5}>
            Product Name
          </GridHeaderItem>
          <GridHeaderItem item xs={1.5}>
            Price
          </GridHeaderItem>
          <GridHeaderItem item xs={1}>
            Quantity
          </GridHeaderItem>
          <GridHeaderItem item xs={1.4}>
            Discount
          </GridHeaderItem>
          <GridHeaderItem item xs={1.4}>
            <VATContainer>
              Net Total
              <VatText>Exc VAT</VatText>
            </VATContainer>
          </GridHeaderItem>
          <GridHeaderItem item xs={1.4}>
            VAT Category
          </GridHeaderItem>
          <GridHeaderItem item xs={1.4}>
            VAT Amount
          </GridHeaderItem>
          <GridHeaderItem item xs={1.4}>
            <VATContainer>
              Net Total
              <VatText>Inc VAT</VatText>
            </VATContainer>
          </GridHeaderItem>
        </GridHeaderContainer>
      </GridHeader>
      <GridBody>
        <Stack gap={2}>
          {selectedItems !== null && (
            <GridBodyBlock1>
              <GridBodyContainer container>
                <GridBodyItem item xs={2.5}>
                  {selectedItems.nameEnglish}
                </GridBodyItem>
                <GridBodyItem item xs={1.5}>
                  <QuantityInput type={'number'} defaultValue={250} />
                </GridBodyItem>
                <GridBodyItem item xs={1}>
                  <QuantityInput type={'number'} defaultValue={1} />
                </GridBodyItem>
                <GridBodyItem item xs={1.4}>
                  250 SAR
                </GridBodyItem>
                <GridBodyItem item xs={1.4}>
                  <VATContainer>250 SAR</VATContainer>
                </GridBodyItem>
                <GridBodyItem item xs={1.4}>
                  250 SAR
                </GridBodyItem>
                <GridBodyItem item xs={1.4}>
                  500 SAR
                </GridBodyItem>
                <GridBodyItem item xs={1.4} lastItem={true}>
                  <VATContainer>500 SAR</VATContainer>
                </GridBodyItem>
              </GridBodyContainer>
            </GridBodyBlock1>
          )}

          <GridBodyBlock2>
            <SearchContainer>
              <img src="/BlueSearch.svg" alt="SearchIcon" />
              <SearchBar
                placeholder="Type and select item"
                onFocus={() => {
                  setIsDropdownOpen(true);
                }}
                onBlur={() => {
                  setTimeout(() => {
                    setIsDropdownOpen(false);
                  }, 100);
                }}
              />
              {isDropdownOpen && (
                <CustomMenuBox>
                  {items.map(item => (
                    <CustomMenuItem
                      onClick={() => {
                        console.log(
                          'item.itemUnitOfMeasure[0]',
                          item.itemUnitOfMeasure[0]
                        );
                        setSelectedItems(item.itemUnitOfMeasure[0]);
                      }}
                    >
                      {item.itemUnitOfMeasure[0].nameEnglish}
                    </CustomMenuItem>
                  ))}
                </CustomMenuBox>
              )}
            </SearchContainer>
          </GridBodyBlock2>
        </Stack>
      </GridBody>
    </MainContainer>
  );
};

export default ItemsGrid;

const MainContainer = styled(Box)(() => ({
  width: '100%',
  marginTop: '45px'
}));
const GridBodyBlock1 = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  width: '100%',
  height: '78px',
  border: '1px solid #E9E9E9',
  boxShadow: '0px 10px 20px #DCDCDC33',
  backgroundColor: '#fff'
}));
const GridBodyBlock2 = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0px 22px',
  borderRadius: '8px',
  width: '100%',
  height: '78px',
  border: '1px solid #E9E9E9',
  boxShadow: '0px 10px 20px #DCDCDC33',
  backgroundColor: '#fff'
}));
const GridHeader = styled(Box)(() => ({
  width: '100%',
  height: '45px',
  background: '#0F5A8E',
  boxShadow: '0px 10px 20px #DFDFDF33',
  borderRadius: '8px 8px 0px 0px',
  padding: '0px 20px',
  marginTop: '10px'
}));
const GridBody = styled(Box)(() => ({
  background: '#F8F8F8',
  border: '1px solid #E9E9E9',
  borderRadius: '0px 0px 8px 8px',
  width: '100%',
  minHeight: '215px',
  padding: '11px 20px'
}));
const TitleContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '19px',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
}));
const HeadingText = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '18px',
  color: '#141433'
}));
const CountText = styled(Typography)(() => ({
  fontSize: '18px',
  color: '#141433'
}));
const RemoveText = styled(Typography)(() => ({
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#8296A5',
  textDecoration: 'underline',
  display: 'flex',
  gap: '4px',
  alignItems: 'center'
}));
const GridHeaderContainer = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%'
}));
const GridBodyContainer = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%'
}));
const GridHeaderItem = styled(Grid)(() => ({
  fontSize: '12px',
  fontWeight: 'bold',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const GridBodyItem = styled(Grid)(({ lastItem = false }) => ({
  height: '100%',
  fontSize: '12px',
  color: '#141433',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: !lastItem && '1px solid #E9E9E9'
}));
const VatText = styled(Grid)(() => ({
  fontSize: '12px',
  fontWeight: '300',
  color: 'white'
}));
const VATContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const SearchContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '230px',
  height: '31px',
  gap: '1px',
  backgroundColor: '#F7F7F7',
  padding: '0px 10.5px',
  borderRadius: '2px',
  position: 'relative'
}));
const SearchBar = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '31px',
    fontSize: '12px',
    color: '#141433',
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
  maxWidth: '230px',
  borderRadius: '2px'
});
const QuantityInput = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '31px',
    fontSize: '12px',
    color: '#141433',
    borderRadius: '2px',
    background: '#FAFAFA'
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '0px solid #EFEFEF', // set the border width when the input is focused
    borderBottom: '1px solid #EFEFEF' // set the border width when the input is focused
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '0px solid #EFEFEF',
    borderBottom: '1px solid #EFEFEF'
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    border: '0px solid #EFEFEF',
    borderBottom: '1px solid #EFEFEF'
  },
  flex: 1,
  maxWidth: '230px',
  borderRadius: '2px'
});

const CustomMenuBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '230px',
  borderRadius: '8px',
  background: '#FFFFFF',
  border: '1px solid rgb(245, 246, 244)',
  boxShadow:
    'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px',
  zIndex: 100000,
  maxHeight: '300px',
  overflow: 'auto'
}));
const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '40px',
  alignItems: 'center',
  color: '#141433',
  '&:hover': { backgroundColor: '#0F5A8E', color: 'white' }
}));
