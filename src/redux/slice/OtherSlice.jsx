import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import otherServices from "../../services/OtherServices";
import { extractErrorMessage } from "../../utils";

const initialState = {
    statelist:{},
    citilist:{}
}

// get state

export const fetchstates = createAsyncThunk(
    "OtherSlice/fetchstates",
    async (url, thunkAPI) => {
        try {
            return await otherServices.fetchstates(url); 
          } catch (error) {
            return thunkAPI.rejectWithValue(extractErrorMessage(error));
          }
    }

);

 // cities


export const fetchcities = createAsyncThunk(
  "OtherSlice/fetchcities",
  async (url, thunkAPI) => {
      try {
          return await otherServices.fetchcities(url); 
        } catch (error) {
          return thunkAPI.rejectWithValue(extractErrorMessage(error));
        }
  }

);


export const OtherSlice = createSlice({
    name :"OtherSlice",
    initialState,
    extraReducers:(builder)=>{

        // get states
        builder
        .addCase(fetchstates.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchstates.fulfilled, (state, action) => {
            state.statelist = action.payload;
            state.loading = false;
          })
          .addCase(fetchstates.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });

          // cities

          builder
        .addCase(fetchcities.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchcities.fulfilled, (state, action) => {
            state.citilist = action.payload;
            state.loading = false;
          })
          .addCase(fetchcities.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });

    },
});

export default OtherSlice.reducer;