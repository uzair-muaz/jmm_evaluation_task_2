import React, { useState } from 'react';

import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import styled from '@emotion/styled';
import { ErrorOutline } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  TextField,
  Typography
} from '@mui/material';

import { loginSuccess } from '../redux/authSlice';
import { publicRequest } from '../requestMethods';

const errorIcon = {
  marginRight: '8px',
  fontSize: '24px',
  color: '#CB2C17'
};
const MainContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh'
}));

const SignInCard = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '95%',
  maxWidth: '399px',
  minHeight: '503px',
  background: '#FFFFFF',
  boxShadow: '0px 5px 15px #B7B7B733',
  border: '1px solid #F1F1F1',
  borderRadius: '6px',
  padding: '34px 10px 39px 10px'
}));

const Heading = styled(Typography)(() => ({
  fontSize: '26px',
  color: '#3D3D3D',
  fontWeight: '600'
}));
const SubHeading = styled(Typography)(() => ({
  fontSize: '14px',
  color: '#707070',
  marginTop: '8px',
  textAlign: 'center'
}));

const CustomFormLabel = styled(Typography)(() => ({
  fontSize: '14px',
  color: '#131313',
  marginBottom: '8px'
}));

const LoginButton = styled(Button)(() => ({
  marginTop: '60px',
  borderRadius: '2px',
  fontSize: '16px',
  background: '#3B3EC2',
  width: '100%',
  maxWidth: '277px',
  height: '40px',
  '&:hover': {
    background: '#1C1E6E'
  }
}));

const CustomTextField = styled(TextField)({
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
  width: '100%',
  maxWidth: '277px',
  backgroundColor: '#F9F9F8',
  borderRadius: '2px'
});

const ErrorContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center'
}));

const ErrorMessage = styled('span')(() => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  color: '#CB2C17',
  marginTop: '5px'
}));

const CheckBoxContainer = styled(Box)(() => ({
  marginTop: '27px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}));

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  '&.Mui-checked': {
    color: '#3B3EC2'
  },
  padding: '0px',
  margin: '0px',
  color: '#CED4DA',
  borderRadius: '2px',
  height: '16px',
  width: '16px'
}));

const CheckBoxText = styled(Typography)(() => ({
  fontSize: '14px',
  color: '#8A8A8A'
}));

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const initialValues = {
    username: '',
    password: ''
  };

  const handleSubmit = async values => {
    setLoader(true);
    await publicRequest
      .post('', {
        query: `
      mutation {
        login(username: "${values.username}", password: "${values.password}") {
          token
        }
      }
    `
      })
      .then(res => {
        dispatch(loginSuccess(res.data.data.login.token));
        navigate('/dashboard/employees');
      })
      .catch(error => {
        console.log(error);
        toast.error('Something went wrong :(');
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <MainContainer>
      <SignInCard>
        <Heading>Login</Heading>
        <SubHeading>Enter credentials to get access</SubHeading>

        <form
          onSubmit={formik.handleSubmit}
          style={{
            marginTop: '73px',
            width: '100%',
            maxWidth: '277px'
          }}
        >
          <Box sx={{ width: '100%' }}>
            <CustomFormLabel>Username</CustomFormLabel>
            <CustomTextField
              id="username"
              placeholder="Enter username"
              variant="outlined"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
            />
            <ErrorContainer>
              {typeof formik.errors.username !== 'undefined' &&
              formik.touched.username ? (
                <ErrorMessage>
                  <ErrorOutline sx={{ ...errorIcon }} />
                  {formik.errors.username}
                </ErrorMessage>
              ) : null}
            </ErrorContainer>
          </Box>

          <Box sx={{ marginTop: '20px', width: '100%' }}>
            <CustomFormLabel>Password</CustomFormLabel>
            <CustomTextField
              id="password"
              type={'password'}
              variant="outlined"
              placeholder="•••••••••"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
            />
            <ErrorContainer>
              {typeof formik.errors.password !== 'undefined' &&
              formik.touched.password ? (
                <ErrorMessage>
                  <ErrorOutline sx={{ ...errorIcon }} />
                  {formik.errors.password}
                </ErrorMessage>
              ) : null}
            </ErrorContainer>
          </Box>

          <CheckBoxContainer>
            <CustomCheckbox
              onChange={() => {
                toast('I do nothing at this point!', {
                  icon: '☹️'
                });
              }}
            />
            <CheckBoxText>Save credentials</CheckBoxText>
          </CheckBoxContainer>
          <LoginButton variant="contained" type="submit">
            {loader ? (
              <CircularProgress sx={{ color: 'white' }} size={23} />
            ) : (
              'Login'
            )}{' '}
          </LoginButton>
        </form>
      </SignInCard>
    </MainContainer>
  );
};

export default SignIn;
