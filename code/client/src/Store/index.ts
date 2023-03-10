import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { applicationApi } from 'Api';
import authReducer from 'Slices/Auth/Auth';
import rateReducer from 'Slices/Rate/Rate';

export const store = configureStore({
  reducer: {
    [applicationApi.reducerPath]: applicationApi.reducer,
    auth: authReducer,
    rate: rateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(applicationApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
