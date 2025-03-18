import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface clearanceProducts {
  _id: string;
  title: string;
  description: string;
  price: number;
  previousPrice?: number;
  image: string;
  rating: number;
  sold: number;
  reviews: number;
  itemsLeft?: string | number;
  discountDaysRemaining?: number;
  offerEndTime: string;
}

interface ProductState {
    clearanceProducts: clearanceProducts[];
}

const initialState: ProductState = {
    clearanceProducts: [],
};

const clearanceProductSlice = createSlice({
  name: "clearanceProducts",
  initialState,
  reducers: {
    setClearanceProducts: (state, action: PayloadAction<clearanceProducts[]>) => {
      state.clearanceProducts = action.payload;
    },
  },
});

export const { setClearanceProducts } = clearanceProductSlice.actions;
export default clearanceProductSlice.reducer;
