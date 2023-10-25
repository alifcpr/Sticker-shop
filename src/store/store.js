import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "../slices/cartSlice";
import { productApi } from "../slices/productApi";
import productReducer, { featchProducts } from "../slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

store.dispatch(featchProducts());
store.dispatch(getTotals());
