import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { FoodItemT } from 'Types';

type RateState = {
  hospitality: number;
  atmosphere: number;
  value: number;
  location: number;
  items: (FoodItemT & {
    tasteVal: number;
    qualityVal: number;
    presentationVal: number;
    creativityVal: number;
    memorabilityVal: number;
  })[];
};

const RateSlice = createSlice({
  name: 'auth',
  initialState: {
    hospitality: 0,
    atmosphere: 0,
    value: 0,
    location: 0,
    items: [],
  } as RateState,
  reducers: {
    setHospitality: (state, action: PayloadAction<number>) => {
      state.hospitality = action.payload;
    },
    setAtmosphere: (state, action: PayloadAction<number>) => {
      state.atmosphere = action.payload;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    setLocation: (state, action: PayloadAction<number>) => {
      state.location = action.payload;
    },
    addToRate: (state, action: PayloadAction<FoodItemT>) => {
      state.items = [
        ...state.items,
        {
          ...action.payload,
          tasteVal: 0,
          qualityVal: 0,
          presentationVal: 0,
          creativityVal: 0,
          memorabilityVal: 0,
        },
      ];
    },
    updateItem: (
      state,
      action: PayloadAction<{
        id: string;
        slider: 'tasteVal' | 'qualityVal' | 'presentationVal' | 'creativityVal' | 'memorabilityVal';
        value: number;
      }>
    ) => {
      const { id, slider, value } = action.payload;

      const item = state.items.find((i) => i.id == id);
      if (item) {
        item[slider] = value;
      }
      return state;
    },
    removeFromRate: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((itm) => itm.id != action.payload);
    },
  },
});

export default RateSlice.reducer;

export const {
  addToRate,
  updateItem,
  setHospitality,
  setAtmosphere,
  setLocation,
  setValue,
  removeFromRate,
} = RateSlice.actions;
