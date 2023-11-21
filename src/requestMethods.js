import axios from 'axios';

import { store } from './store';

let BASEURL = 'https://graphql.jmmerp.com/graphql/';

export const publicRequest = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
    Tenant: 'gulfam',
    Branchname: 'shahmir'
  }
});

export const privateRequest = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
    Tenant: 'gulfam',
    Branchname: 'shahmir'
  },
  timeout: 60000
});

privateRequest.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      // Token has expired, redirect to login page
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Subscribe to changes in the token value
store.subscribe(() => {
  const state = store.getState();
  const authToken = state.auth.userToken !== null ? state.auth.userToken : '';
  privateRequest.defaults.headers.Authorization = `Bearer ${authToken}`;
});

// Initial setup of Authorization header
const initialState = store.getState();
const initialAuthToken = initialState.auth.userToken;
privateRequest.defaults.headers.Authorization = initialAuthToken || '';

console.log('header', privateRequest.defaults.headers);
