import { configureStore } from "@reduxjs/toolkit";
import pageProperties from '@/store/slices/pageProperties'

export const store = configureStore({
    reducer: {
        pageProperties: pageProperties
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;