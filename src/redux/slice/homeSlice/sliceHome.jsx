import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { extractErrorMessage } from "../../../utils";
import servicesHome from "./servicesHome";

const initialState = {
  banners: {},
  gallery: {},
  menus: {},
  pageData: {},
  fontSize: 16,
  loading: false,
  error: "",
};

// 1> fetching banners
export const fetchBanner = createAsyncThunk(
  "sliceHome/fetchBanner",
  async (url, thunkAPI) => {
    try {
      return await servicesHome.fetchBanners(url);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// 2> fetching gallery
export const fetchGallery = createAsyncThunk(
  "sliceHome/fetchGallery",
  async (url, thunkAPI) => {
    try {
      return await servicesHome.fetchGallery(url);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// 3> fetching menus
export const fetchMenus = createAsyncThunk(
  "sliceHome/fetchMenus",
  async (url, thunkAPI) => {
    try {
      return await servicesHome.fetchMenus(url);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// 3> fetching menus
export const fetchPageData = createAsyncThunk(
  "sliceHome/fetchPageData",
  async (url, thunkAPI) => {
    try {
      return await servicesHome.fetchPageData(url);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const sliceHome = createSlice({
  name: "sliceHome",
  initialState,
  reducers: {
    fontSizeIncrease: (state) => {
      state.fontSize += 1;
    },
    fontSizeDecrease: (state) => {
      state.fontSize -= 1;
    },
    fontSizeOriginal: (state) => {
      state.fontSize = 16;
    },
    resetMenuData: (state) => {
      state.pageData = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanner.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBanner.fulfilled, (state, action) => {
        state.banners = action.payload;
        state.loading = false;
      })
      .addCase(fetchBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchGallery.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGallery.fulfilled, (state, action) => {
        state.gallery = action.payload;
        state.loading = false;
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchMenus.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenus.fulfilled, (state, action) => {
        state.menus = action.payload;
        state.loading = false;
      })
      .addCase(fetchMenus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchPageData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPageData.fulfilled, (state, action) => {
        state.pageData = action.payload;
        state.loading = false;
      })
      .addCase(fetchPageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  fontSizeIncrease,
  fontSizeDecrease,
  fontSizeOriginal,
  resetMenuData,
} = sliceHome.actions;
export default sliceHome.reducer;
