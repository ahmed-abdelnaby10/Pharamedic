import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("productsSlice/getData", async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw Error("Failed to fetch users data")
    const data = await res.json();
    return data;
});

const initialState: Product[] = []

export const productsSlice = createSlice({
    initialState,
    name: "productsSlice",
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getData.fulfilled, (state, action)=>{
            return action.payload;
        })
    }
})
export const {} = productsSlice.actions;
export default productsSlice.reducer;