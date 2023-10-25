import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  items: [],
};
export const featchProducts = createAsyncThunk(
  "/prdocts/featchProducts",
  async () => {
    const response = await axios.get("http://localhost:9000/stickers");
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [featchProducts.pending]: (state, action) => {
      state.status = "pending";
    },
    [featchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [featchProducts.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productSlice.reducer;
