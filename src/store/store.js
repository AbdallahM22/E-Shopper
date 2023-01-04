import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/Auth-slice";
import CartSlice from "./slices/Cart-slice";
import ProductsSlice from "./slices/Products-slice";

const store = configureStore({
    reducer: {
        products: ProductsSlice,
        cart: CartSlice,
        auth: AuthSlice
    }
});


export default store;