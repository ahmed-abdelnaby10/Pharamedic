"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

const initialState: Product[] = []

export const cartSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const foundedProd = state.find((prod) => prod.id === action.payload.id)         
            if (foundedProd) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "center",
                    showConfirmButton: false,
                    timer: 1500,
                    background:"rgb(83 177 117)",
                    color: "#fff",
                    iconColor: "#fff",
                    width: "280px"
                });
                Toast.fire({
                    icon: "success",
                    title: "Product already added to cart!"
                });
            } else {
                state.push(action.payload)
            }
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            return state.filter((product) => product.id !== action.payload.id);
        },
        clearCart: () => {
            return []
        },
        
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;