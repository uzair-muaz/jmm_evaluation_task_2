import React, { useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

import styled from '@emotion/styled';
import {
  Box,
  Button,
  Modal,
  Pagination,
  TextField,
  Typography
} from '@mui/material';

import EmployeeModal from '../components/EmployeeModal';
import EmployeeTable from '../components/EmployeeTable';
import { privateRequest } from '../requestMethods';

const MainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'end',
  width: '100%',
  minHeight: '100vh'
}));
const CustomPagination = styled(Pagination)(() => ({
  marginTop: '43px',
  marginRight: '29px',
  '& .MuiPaginationItem-root': {
    color: '#B1B1B1',
    border: 'none',
    height: '23px',
    minWidth: '20px'
  },
  '& .MuiPaginationItem-page.Mui-selected': {
    color: '#FFFFFF',
    backgroundColor: '#3B3EC2',
    border: 'none'
  },
  '& .MuiPaginationItem-previousNext': {
    backgroundColor: '#ECECEC',
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#3B3EC2'
    }
  }
}));

const PageHeader = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '0px 23px',
  height: '83px'
}));

const TotalText = styled(Typography)(() => ({
  fontSize: '20px',
  color: '#141433',
  fontWeight: '500'
}));

const SearchContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '505px',
  gap: '15px'
}));

const SearchBar = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '40px',
    fontSize: '14px',
    color: '#565556',
    borderRadius: '2px'
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #EFEFEF' // set the border width when the input is focused
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #EFEFEF' // remove the border by default
  },
  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #EFEFEF' // set the border width on hover
  },
  flex: 1,
  maxWidth: '344px',
  backgroundColor: '#F9F9F8',
  borderRadius: '2px'
});

const SearchButton = styled(Button)(() => ({
  borderRadius: '2px',
  fontSize: '16px',
  background: '#3B3EC2',
  color: '#FFFFFF',
  width: '143px',
  height: '40px',
  '&:hover': {
    background: '#1C1E6E'
  }
}));

const Employees = () => {
  const [rows, setRows] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [search, setSearch] = useState('');
  const [lastSearch, setLastSearch] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fetchRowsData = () => {
    console.log(lastSearch);
    let url =
      lastSearch === ''
        ? `/employees?page=${pageNumber}&per_page=9`
        : `/employees?page=${pageNumber}&per_page=9&search=${lastSearch}`;
    privateRequest
      .get(url)
      .then(res => {
        setRows(res.data.employees.data);
        setLastPage(res.data.employees.last_page);
        setTotalEmployees(res.data.employees.total);
      })
      .catch(error => {
        console.log(error);
        toast.error('Something went wrong :(');
      });
  };

  useEffect(() => {
    fetchRowsData();
  }, [pageNumber, lastSearch]);

  return (
    <>
      <MainContainer>
        <PageHeader>
          <TotalText>{`Total ${totalEmployees}`}</TotalText>
          <SearchContainer>
            <SearchBar
              id="email"
              placeholder="Type here ..."
              variant="outlined"
              value={search}
              onChange={event => {
                setSearch(event.target.value);
              }}
            />
            {lastSearch !== '' ? (
              <SearchButton
                onClick={() => {
                  setLastSearch('');
                  setSearch('');
                  setPageNumber(1);
                }}
              >
                Clear
              </SearchButton>
            ) : (
              <SearchButton
                onClick={() => {
                  setLastSearch(search);
                  setPageNumber(1);
                }}
              >
                Search
              </SearchButton>
            )}
          </SearchContainer>
        </PageHeader>
        <EmployeeTable rows={rows} openModal={handleOpen} />
        <CustomPagination
          count={lastPage}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => setPageNumber(value)}
        />
      </MainContainer>

      <Modal open={open} onClose={handleClose}>
        <EmployeeModal />
      </Modal>
    </>
  );
};

export default Employees;
