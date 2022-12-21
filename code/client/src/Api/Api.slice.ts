import { createApi } from '@reduxjs/toolkit/query/react';
import { RateRestaurantRequestT, RestaurantT, SponsorT, UserAuth } from 'Types';
import { baseQuery } from './config';

export const applicationApi = createApi({
  reducerPath: 'applicationApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    userInfo: builder.mutation<UserAuth, string>({
      query: () => 'auth',
    }),
    rateRestaurant: builder.mutation<RateRestaurantRequestT, RateRestaurantRequestT>({
      query: (rating: RateRestaurantRequestT) => ({
        url: `restaurants/${rating.id}`,
        body: rating,
      }),
    }),
    getRestaurant: builder.query<RestaurantT, string>({
      query: (restaurantId: string) => `restaurants/${restaurantId}`,
    }),
    getSponsor: builder.query<SponsorT, void>({
      query: () => 'sponsor',
    }),
  }),
});

export const { useGetRestaurantQuery, useGetSponsorQuery } = applicationApi;
