import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Product {
  title: string;
  price: number;
  id: string;
}

const initialState: Product[] = [
  { title: "Escape From Tarkov", price: 60, id: "eft" },
  { title: "Hunt Gamer", price: 70, id: "hg" },
  { title: "Hell Let Loose", price: 55, id: "hll" },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      // return [action.payload, ...state];
      // the new way (thanks to immer.js)
      state.push(action.payload)
    },
  },
});

export const getProductsSelector = (state: RootState) => state.products;

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
