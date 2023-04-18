import { configureStore } from "@reduxjs/toolkit";
import sliceFooter from "../slice/sliceFooter";
import sliceHome from "../slice/homeSlice/sliceHome";

export const store = configureStore({
  reducer: { sliceHome, sliceFooter },
});
