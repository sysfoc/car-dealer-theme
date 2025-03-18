import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    _id: string;
    description: string;
    price: number;
    sold: number;
    image: string;
    tags: string[];
    reviews: { count: number; rating: number }[];
    storeInfo: string[];
    category: string;
    offerEndTime: string;
  }

interface ProductState {
  allProducts: Product[];
}

const initialState: ProductState = {
  allProducts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts:(state, action: PayloadAction<Product[]>) => {
      state.allProducts = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
