import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosBaseURL } from "../../apis/baseApi";

const initialState = {
  getVisitors: {},
  addVisitors: {},
  lastUpdated: {},
  loading: false,
  error: "",
};

// Last Updated
export const fetchLastUpdated = createAsyncThunk(
  "aclSliceInternal/fetchLastUpdated",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get(`getlastupdate`);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

// getting visitors
export const fetchGetVisitors = createAsyncThunk(
  "catSliceInternal/fetchGetVisitors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBaseURL.get("getVisitor");
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

const getIP = async () => {
  try {
    const res = await axios.get("https://geolocation-db.com/json/");
    return res.data.IPv4;
  } catch (error) {
    console.log(error);
  }
};

// Adding Visitors
export const fetchAddVisitors = createAsyncThunk(
  "catSliceInternal/fetchAddVisitors",
  async (_, { rejectWithValue }) => {
    try {
      const ip = await getIP();
      const response = await axiosBaseURL.get(`addVisitor/${ip}`);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const sliceFooter = createSlice({
  name: "sliceFooter",
  initialState,
  extraReducers: (builder) => {
    // get visitors
    builder
      .addCase(fetchGetVisitors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetVisitors.fulfilled, (state, action) => {
        state.getVisitors = action.payload;
        state.loading = false;
      })
      .addCase(fetchGetVisitors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // add visitors
    builder
      .addCase(fetchAddVisitors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAddVisitors.fulfilled, (state, action) => {
        state.addVisitors = action.payload;
        state.loading = false;
      })
      .addCase(fetchAddVisitors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // last Updated on
    builder
      .addCase(fetchLastUpdated.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLastUpdated.fulfilled, (state, action) => {
        state.lastUpdated = action.payload;
        state.loading = false;
      })
      .addCase(fetchLastUpdated.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = sliceFooter.actions;

export default sliceFooter.reducer;
