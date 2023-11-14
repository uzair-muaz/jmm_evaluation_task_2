import * as React from 'react';

import moment from 'moment';

import styled from '@emotion/styled';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';

const CustomTableHeader = styled(TableHead)(() => ({
  background: '#F2F1F1'
}));
const HeaderTableCell = styled(TableCell)(() => ({
  fontSize: '14px',
  color: '#3D3D3D',
  fontWeight: '500'
}));
const BodyTableCell = styled(TableCell)(() => ({
  fontSize: '14px',
  color: '#707070',
  fontWeight: '400'
}));
const NameTableCell = styled(TableCell)(() => ({
  fontSize: '14px',
  color: '#3B3EC2',
  fontWeight: '500',
  textDecoration: 'underline',
  cursor: 'pointer'
}));

export default function EmployeeTable({ rows, openModal, setID }) {
  console.log(rows);
  return (
    <Table sx={{ minWidth: 650, border: 'none' }} aria-label="simple table">
      <CustomTableHeader>
        <TableRow sx={{ 'td, th': { border: 'none' } }}>
          <BodyTableCell align="center">#</BodyTableCell>
          <HeaderTableCell align="left">Name</HeaderTableCell>
          <HeaderTableCell align="left">Designation</HeaderTableCell>
          <HeaderTableCell align="left">Contact</HeaderTableCell>
          <HeaderTableCell align="left">Address</HeaderTableCell>
          <HeaderTableCell align="left">Created at</HeaderTableCell>
          <HeaderTableCell align="left">Updated at</HeaderTableCell>
        </TableRow>
      </CustomTableHeader>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id} sx={{ 'td, th': { border: 'none' } }}>
            <BodyTableCell align="center">{row.id}</BodyTableCell>
            <NameTableCell
              onClick={() => {
                openModal();
                setID(row.id);
              }}
            >
              {row.name}
            </NameTableCell>
            <BodyTableCell align="left">{row.designation}</BodyTableCell>
            <BodyTableCell align="left">{row.contact}</BodyTableCell>
            <BodyTableCell align="left">{row.address}</BodyTableCell>
            <BodyTableCell align="left">
              {moment(row.created_at).format('DD/MM/YYYY')}
            </BodyTableCell>
            <BodyTableCell align="left">
              {moment(row.updated_at).format('DD/MM/YYYY')}
            </BodyTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
