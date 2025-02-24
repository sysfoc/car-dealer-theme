import { configureStore } from "@reduxjs/toolkit";
import pageProperties from '@/store/slices/pagePropertiesSlice';
import userSlice from '@/store/slices/userSlice';

export const store = configureStore({
    reducer: {
        pageProperties: pageProperties,
        user: userSlice
    }
})

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;