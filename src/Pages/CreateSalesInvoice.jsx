import React, { useEffect, useState } from 'react';

import moment from 'moment';
import toast from 'react-hot-toast';

import styled from '@emotion/styled';
import {
  KeyboardArrowDownRounded,
  KeyboardBackspace
} from '@mui/icons-material';
import {
  Box,
  Breadcrumbs,
  FormControl,
  FormControlLabel,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';

import ItemsGrid from '../components/ItemsGrid';
import SummaryCard from '../components/SummaryCard';
import { privateRequest, publicRequest } from '../requestMethods';

const CreateSalesInvoice = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [termsAndConditions, setTermsAndConditions] = useState([]);
  const [items, setItems] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedItems, setSelectedItems] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const ItemsQuery = `
  query {
    items {
      nodes {
        itemUnitOfMeasure{
          nameEnglish
          itemId
          unitId
        }
      }
      totalCount
    }
  }
`;

  const CustomersQuery = `
  query {
    customers {
      nodes {
        customerType{
          nameEnglish
        }
        nameEnglish
        vATNo
        id
        fullAddress
        groupVatNumber
      }
      totalCount
    }
  }
`;

  const fetchItems = () => {
    privateRequest
      .post('', {
        query: ItemsQuery
      })
      .then(res => {
        setItems(res.data.data.items.nodes);
      })
      .catch(error => {
        console.log(error);
        toast.error('Something went wrong :(');
      });
  };
  const fetchCustomers = () => {
    privateRequest
      .post('', {
        query: CustomersQuery
      })
      .then(res => {
        setCustomers(res.data.data.customers.nodes);
      })
      .catch(error => {
        console.log(error);
        toast.error('Something went wrong :(');
      });
  };
  const handleSubmit = () => {
    const mutation = ` mutation AddSaleInvoice($input: CreateSaleInvoiceCommandInput!) {addSaleInvoice(input: $input) 
  }
`;

    const variables = {
      input: {
        amountPaid: 0.0,
        customerId: 3,
        customerType: 'CASH_CUSTOMER',
        id: moment().format('YYMMDDHHmmss'),
        invoiceItems: [
          {
            itemId: 1,
            quantity: 1.0,
            sellPrice: 25.0,
            unitId: 2,
            vATPercentage: 2.5
          }
        ],
        invoiceType: 'SIMPLIFIEDTAX',
        isScheduled: false,
        paymentMethod: 'CASH',
        paymentType: 'NO',
        qrCodePayload: 'DUMMY',
        receiveAs: 'TAKEAWAY',
        receiveType: 'NO_ITEMS',
        saleInvoiceClearenceStatus: 'UN_CLEAR',
        vatCategoryId: 1
      }
    };
    privateRequest
      .post('', {
        query: mutation,
        variables: variables
      })
      .then(response => {
        toast.success('Invoice Created With dummy values');
        console.log('response.data.data', response);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetchItems();
    fetchCustomers();
  }, []);

  useEffect(() => {
    console.log('items', items);
  }, [items]);
  useEffect(() => {
    console.log('customers', customers);
  }, [customers]);

  return (
    <MainContainer>
      <BreadcrumbsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <BreadcrumbText color={'#2681C1'}>Sales</BreadcrumbText>
          <BreadcrumbText>Sales Invoice</BreadcrumbText>
        </Breadcrumbs>
      </BreadcrumbsContainer>
      <TitleContainer>
        <KeyboardBackspace sx={{ color: '#2681C1', fontSize: '35px' }} />
        Sale Invoice
      </TitleContainer>

      <CustomStack>
        <DropdownStack>
          <SelectionText>Invoice Type</SelectionText>
          <FormControl component="fieldset">
            <RadioGroup
              defaultValue="SIMPLIFIED_TAX"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '35px'
              }}
            >
              <CustomFormControlLabel
                value="TAX"
                control={<Radio />}
                label="Tax"
              />
              <CustomFormControlLabel
                value="SIMPLIFIED_TAX"
                control={<Radio />}
                label="Simplified Tax"
              />
            </RadioGroup>
          </FormControl>
        </DropdownStack>

        <DropdownStack>
          <SelectionText>Special Transaction Type</SelectionText>
          <DropdownContainer onClick={handleClick}>
            Hello <KeyboardArrowDownRounded />
          </DropdownContainer>
          <CustomMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <CustomMenuItem>Hello</CustomMenuItem>
          </CustomMenu>
        </DropdownStack>

        <DropdownStack>
          <SelectionText>Sales man</SelectionText>
          <DropdownContainer onClick={handleClick}>
            Hello <KeyboardArrowDownRounded />
          </DropdownContainer>
          <CustomMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <CustomMenuItem>Hello</CustomMenuItem>
          </CustomMenu>
        </DropdownStack>

        <DropdownStack>
          <SelectionText>Buyer Name</SelectionText>
          <DropdownContainer onClick={handleClick}>
            Select a buyer <KeyboardArrowDownRounded />
          </DropdownContainer>
          <CustomMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {customers.map(customer => (
              <CustomMenuItem
                onClick={() => {
                  setSelectedCustomer(customer);
                }}
              >
                {customer.nameEnglish}
              </CustomMenuItem>
            ))}
          </CustomMenu>
        </DropdownStack>
      </CustomStack>

      <ItemsGrid
        items={items}
        addSelectedItems={itemOBJ =>
          setSelectedItems([...selectedItems, itemOBJ])
        }
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '23px'
        }}
      >
        <PaymentStack>
          <Stack gap={'18px'}>
            <PaymentType>Invoice Type</PaymentType>
            <FormControl component="fieldset">
              <RadioGroup
                defaultValue="NETWORK"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '30px'
                }}
              >
                <CustomFormControlLabel
                  value="CASH"
                  control={<Radio />}
                  label="On cash"
                />
                <CustomFormControlLabel
                  value="NETWORK"
                  control={<Radio />}
                  label="On Network"
                />
                <CustomFormControlLabel
                  value="TRANSFER"
                  control={<Radio />}
                  label="E-transfer"
                />
              </RadioGroup>
            </FormControl>
          </Stack>

          <Box>
            <TermsHeading>Terms & Conditions</TermsHeading>
            <TermsSubHeading>
              Enter terms & conditions applied to the invoice
            </TermsSubHeading>
            <TermsContainer>
              {termsAndConditions.length + 1} {'.'}
              <TermsInput placeholder="Type and select item" />
            </TermsContainer>
          </Box>
        </PaymentStack>

        <Stack gap={'22px'}>
          <SummaryCard />
          <SaveButton onClick={handleSubmit}>Save & Proceed</SaveButton>
        </Stack>
      </Box>
    </MainContainer>
  );
};

export default CreateSalesInvoice;

const MainContainer = styled(Box)(() => ({
  padding: '31px 75px 23px 28px',
  width: '100%',
  height: '100%',
  maxHeight: 'calc(100vh - 80px)',
  minHeight: '100px',
  position: 'relative',
  overflow: 'auto'
}));
const BreadcrumbsContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  marginBottom: '8px'
}));
const BreadcrumbText = styled(Typography)(() => ({
  fontSize: '14px'
}));
const TitleContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  color: '#141433',
  fontSize: '21px',
  fontWeight: '800'
}));
const SelectionText = styled(Typography)(() => ({
  fontSize: '12px',
  color: '#141433'
}));
const CustomFormControlLabel = styled(FormControlLabel)(() => ({
  fontSize: '14px !important',
  color: '#141433',
  marginLeft: '3px',
  '& .Mui-checked': {
    color: '#2681C1'
  },
  '& .MuiRadio-root': {
    width: '10px',
    height: '10px',
    marginRight: '10px'
  }
}));
const DropdownContainer = styled(Box)(({ theme }) => ({
  width: '200px',
  height: '37px',
  background: '#FFFFFF',
  border: '1px solid #DFDFDF',
  borderRadius: '4px',
  padding: '5px 10px 5px 15px',
  fontSize: '14px',
  color: '#141433',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));
const CustomMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '200px',
    background: '#FFFFFF',
    border: '1px solid #DFDFDF',
    borderRadius: '4px',
    maxHeight: '300px',
    boxShadow: 'none',
    overflow: 'auto'
  }
}));
const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  alignItems: 'center',
  color: '#141433',
  '&:hover': { backgroundColor: '#0F5A8E', color: 'white' }
}));
const DropdownStack = styled(Stack)(({ theme }) => ({
  gap: '5px'
}));
const CustomStack = styled(Stack)(({ theme }) => ({
  gap: '27px',
  flexDirection: 'row',
  marginTop: '14px'
}));
const PaymentStack = styled(Stack)(({ theme }) => ({
  gap: '30px'
}));
const PaymentType = styled(Typography)(() => ({
  fontSize: '18px',
  color: '#141433',
  fontWeight: 'bold'
}));
const TermsHeading = styled(Typography)(() => ({
  fontSize: '12px',
  color: '#141433',
  fontWeight: '600'
}));
const TermsSubHeading = styled(Typography)(() => ({
  fontSize: '12px',
  color: '#8A8A8A'
}));
const TermsContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '366px',
  height: '35px',
  backgroundColor: '#FFFFFF',
  padding: '0px 10.5px',
  borderRadius: '4px',
  border: '1px solid #DFDFDF',
  fontSize: '14px',
  color: '#545454',
  marginTop: '3px'
}));
const TermsInput = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '35px',
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

const SaveButton = styled(Box)(() => ({
  width: '293px',
  height: '40px',
  background: '#2681C1',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '12px',
  fontWeight: '600',
  cursor: 'pointer',
  '&:hover': {
    background: '#1c4b80'
  }
}));
