import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface lightningProducts {
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
  discountDaysRemaining: number;
  offerEndTime: string;
}

interface ProductState {
    lightningProducts: lightningProducts[];
}

const initialState: ProductState = {
    lightningProducts: [],
};

const lightningProductSlice = createSlice({
  name: "lightningProducts",
  initialState,
  reducers: {
    setLightningProducts: (state, action: PayloadAction<lightningProducts[]>) => {
      state.lightningProducts = action.payload;
    },
  },
});

export const { setLightningProducts } = lightningProductSlice.actions;
export default lightningProductSlice.reducer;
