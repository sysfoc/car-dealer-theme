import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userState = {
  name: string;
  profilePicture: string;
  email?: string;
  phone?: number;
  totalReviews: number;
  totalLikes: number;
};
const initialState: userState = {
  name: "Tahsin Haider",
  email: "tahsin3194@gmail.com",
  phone: 923020620626,
  profilePicture: "/images/dummyProfilePic.jpg",
  totalLikes: 0,
  totalReviews: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    updateUserfield:<K extends keyof userState> (
      state: userState,
      action: PayloadAction<{ field: K; value: userState[K]}>
    ) => {
      const { field, value } = action.payload;
      if (field in state) {
        state[field] = value;
      }
    },
    resetUser: () => initialState,
  },
});

export const { setUser, updateUserfield, resetUser } = userSlice.actions;
export default userSlice.reducer;
