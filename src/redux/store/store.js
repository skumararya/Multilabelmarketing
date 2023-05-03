import { configureStore } from "@reduxjs/toolkit";
import sliceFooter from "../slice/sliceFooter";
import sliceHome from "../slice/homeSlice/sliceHome";
import userSlice from "../slice/adminSlice/userSlice";

export const store = configureStore({
  reducer: { sliceHome, sliceFooter, userSlice }, 
});
