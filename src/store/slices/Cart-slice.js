import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const storeCartData = createAsyncThunk('cartSlice/storeCartData', async(cart)=> {
    const response = await fetch('https://e-shopper-ed92a-default-rtdb.firebaseio.com/cart.json', {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(cart)
    });
    const data = await response.json();
    return data;
});

const initialState = JSON.parse(localStorage.getItem("cart")) || {
  products: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState ,
  reducers: {
    addToCart: (state, action) => {
      state.totalAmount++;
      const product = action.payload;
      state.totalPrice += product.price;
      const findProduct = state.products.find(
        (element) => product.id === element.id
      );
      if (findProduct) {
        findProduct.amount++;
        findProduct.total = findProduct.price * findProduct.amount;
        const elementIndex = state.products.findIndex(
          (element) => findProduct.id === element.id
        );
        state.products[elementIndex] = findProduct;
      } else {
        const total = product.price;
        state.products.push({ ...product, amount: 1, total: total });
      }
    },
    removeFromCart: (state, action) => {
      state.totalAmount--;
      const productId = action.payload;
      const product = state.products.find(
        (element) => productId === element.id
      );
      const productIndex = state.products.findIndex(
        (element) => product.id === element.id
      );
      product.amount--;
      product.total -= product.price;
      state.totalPrice -= product.price;
      if (product.amount > 0) {
        state.products[productIndex] = product;
      } else {
        const modifiedProducts = state.products.filter(
          (product) => product.id !== productId
        );
        state.products = modifiedProducts;
      }
    },
    clearCart: ()=> {
      return {
        products: [],
        totalAmount: 0,
        totalPrice: 0,
      }
    },
    clearProduct: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(
        (element) => productId === element.id
      );
      state.totalAmount -= product.amount;
      state.totalPrice -= product.total;
      const modifiedProducts = state.products.filter(
        (product) => product.id !== productId
      );
      state.products = modifiedProducts;
    },
  },
  extraReducers: (builder)=> {
    builder.addCase(storeCartData.fulfilled, (state, action)=> {
    })
    builder.addCase(storeCartData.rejected, (state, action)=> {
    })
  }
});

export const { addToCart, removeFromCart, clearCart, clearProduct } = cartSlice.actions;
export default cartSlice.reducer;
