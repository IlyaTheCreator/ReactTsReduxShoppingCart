import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  title: string;
  price: number;
  id: string;
}

const initialProducts: Product[] = [
  { title: "Escape From Tarkov", price: 60, id: "eft" },
  { title: "Hunt Gamer", price: 70, id: "hg" },
  { title: "Hell Let Loose", price: 55, id: "hll" },
];

const productsSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      return [action.payload, ...state];
    },
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
