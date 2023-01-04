import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts', async ()=> {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
})

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: ""
    },
    reducers: {

    },
    extraReducers: (builder)=> {
        builder.addCase(fetchProducts.pending, (state, action)=> {
            // return action.payload;
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action)=> {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action)=> {
            state.loading = false;
            state.error = "something went wrong"
            // return action.payload;
        });
    }
})

export const {} = productsSlice.actions;
export default productsSlice.reducer;