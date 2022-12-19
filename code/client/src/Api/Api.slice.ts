import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './config';

export const applicationApi = createApi({
  reducerPath: 'applicationApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});

export const {} = applicationApi;
