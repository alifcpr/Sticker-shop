import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "../slices/cartSlice";
import productReducer, { featchProducts } from "../slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

store.dispatch(featchProducts());
store.dispatch(getTotals());
