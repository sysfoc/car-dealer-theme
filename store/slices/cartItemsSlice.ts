import { createSlice } from "@reduxjs/toolkit";
type ItemType = {
    id?: number;
  description?: string;
  price?: number;
  sold?: number;
  image?: string;
  tags?: string[];
  reviews?: { count: number; rating: number }[];
  storeInfo?: string[];
  category?: string;
  offerEndTime?: string;
}
const initialState:{items: ItemType[], totalQuantity: number, totalPrice: number} = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: () => {
        // const {id, price, quantity} = action.payload;
        // const existingItem = state.items.find(ele=>ele.id===id);
        // if(existingItem)
        // {
        //     existingItem. += quantity;
        // }
        // else
        // {

        // }
    },

    removeItem: () => {},

    updateQuantity: () => {},

    clearCart: () => {},
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
