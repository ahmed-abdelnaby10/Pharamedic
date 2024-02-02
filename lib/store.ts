'use client'
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productsSlice, { getData } from "./features/products/ProductsSlice";
import cartSlice from "./features/cart/CartSlice";

const presistConfig = {
    key: "pharamedic-shop",
    storage
}

const reducers = combineReducers({
    product: productsSlice,
    cart: cartSlice,
})

const presistedReducers = persistReducer(presistConfig, reducers)

export const store = configureStore({
    reducer: presistedReducers,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
getData()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch