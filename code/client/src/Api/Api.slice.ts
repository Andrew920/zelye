import { createApi } from '@reduxjs/toolkit/query/react';
import { RestaurantT, SponsorT } from 'Types';
import { baseQuery } from './config';

export const applicationApi = createApi({
  reducerPath: 'applicationApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getRestaurant: builder.query<RestaurantT, string>({
      query: (restaurantName: string) => `restaurants/${restaurantName}`,
    }),
    getSponsor: builder.query<SponsorT, void>({
      query: () => 'sponsor',
    }),
  }),
});

export const { useGetRestaurantQuery, useGetSponsorQuery } = applicationApi;
