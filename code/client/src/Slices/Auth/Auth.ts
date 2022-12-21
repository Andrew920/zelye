import { createSlice } from '@reduxjs/toolkit';
import { applicationApi } from 'Api';
import type { RootState } from 'Store';
import type { User } from 'Types';

type AuthState = {
  user: User | null;
  token: string | null;
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(applicationApi.endpoints.userInfo.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    });
  },
});

export default AuthSlice.reducer;

export const { logout } = AuthSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
