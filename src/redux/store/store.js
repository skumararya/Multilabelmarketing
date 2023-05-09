import { configureStore } from "@reduxjs/toolkit";
import sliceFooter from "../slice/sliceFooter";
import sliceHome from "../slice/homeSlice/sliceHome";
import userSlice from "../slice/adminSlice/userSlice";
import OtherSlice from "../slice/OtherSlice";

export const store = configureStore({
  reducer: { sliceHome, sliceFooter, userSlice ,OtherSlice }, 
});
