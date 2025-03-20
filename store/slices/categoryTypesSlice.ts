import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryType {
  title: string;
  image: string;
  link: string;
  categoryType: string;
}

interface CategoryTypeState {
  categoryTypes: CategoryType[];
}

const initialState: CategoryTypeState = {
  categoryTypes: [],
};

const categoryTypesSlice = createSlice({
  name: "categoryTypes",
  initialState,
  reducers: {
    setCategoryTypes: (state, action: PayloadAction<CategoryType[]>) => {
      state.categoryTypes = action.payload;
    },
  },
});

export const { setCategoryTypes } = categoryTypesSlice.actions;
export default categoryTypesSlice.reducer;
