import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import products from "./products/products.slice";

const store = configureStore({
  reducer: { products },
});


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;

export default store;
