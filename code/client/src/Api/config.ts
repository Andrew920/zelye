import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

const { REACT_APP_SERVER_URL, NODE_ENV } = process.env;

export const baseQuery = fetchBaseQuery({
  baseUrl: NODE_ENV == 'development' ? REACT_APP_SERVER_URL + '/api/' : 'api/',
  prepareHeaders: (headers: Headers) => {
    // If we have a token set in state, let's assume that we should be passing it.
    const token: string = localStorage.getItem('token') || '';

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
