import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { FoodItemT } from 'Types';

type RateState = {
  items: FoodItemT[];
};

const RateSlice = createSlice({
  name: 'auth',
  initialState: { items: [] } as RateState,
  reducers: {
    addToRate: (state, action: PayloadAction<FoodItemT>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromRate: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((itm) => itm.id != action.payload);
    },
  },
});

export default RateSlice.reducer;

export const { addToRate, removeFromRate } = RateSlice.actions;
