import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "@/app/lib/definitions";

const initialState: userType = {
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
    updateUserfield:<K extends keyof userType> (
      state: userType,
      action: PayloadAction<{ field: K; value: userType[K]}>
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
