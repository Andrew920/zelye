import { createApi } from '@reduxjs/toolkit/query/react';
import { RequestBodyT, RestaurantT, SponsorT, UserAuth } from 'Types';
import { baseQuery } from './config';

export const applicationApi = createApi({
  reducerPath: 'applicationApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    userInfo: builder.mutation<UserAuth, string>({
      query: () => 'auth',
    }),
    rateRestaurant: builder.mutation<RequestBodyT, RequestBodyT>({
      query: (rating) => ({
        method: 'POST',
        url: `restaurant/${rating.id}`,
        body: rating,
      }),
    }),
    getRestaurant: builder.query<RestaurantT, string>({
      query: (restaurantId: string) => `restaurant/${restaurantId}`,
    }),
    getSponsor: builder.query<SponsorT, void>({
      query: () => 'sponsor',
    }),
  }),
});

export const { useGetRestaurantQuery, useGetSponsorQuery, useRateRestaurantMutation } =
  applicationApi;
