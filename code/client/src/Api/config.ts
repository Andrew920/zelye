import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

const { REACT_APP_SERVER_URL } = process.env;

export const baseQuery = fetchBaseQuery({
  baseUrl: REACT_APP_SERVER_URL || 'http://localhost:4000/api/v1,',
  prepareHeaders: (headers, { getState }) => {
    // If we have a token set in state, let's assume that we should be passing it.
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
