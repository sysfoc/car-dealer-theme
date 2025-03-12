import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from "@/store/slices/userSlice"
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pageProperties from '@/store/slices/pagePropertiesSlice';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const rootReducer = combineReducers({
    user: userReducer,
    pageProperties: pageProperties,
   
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
export type AppRootState = ReturnType<typeof store.getState>;
