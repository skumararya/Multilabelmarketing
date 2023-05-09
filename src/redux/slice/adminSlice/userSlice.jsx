import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import servicesemployee from "../../../services/employee";
import { extractErrorMessage } from "../../../utils";
//import { axiosBaseURL } from "../../../apis/baseApi";

const initialState = {
  employeelist: {},
  addemployee:{},
  loading: false,
  error: "",
};

// Get Employee
export const fetchemployee = createAsyncThunk( 
  "userSlice/fetchemployee",
  async (url, thunkAPI) => {
    try {
      return await servicesemployee.fetchemployeelist(url); 
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Add Employee
export const addemployee = createAsyncThunk( 
  "userSlice/addemployee",
  async ({url,empmodal}, thunkAPI) => {
    try {
      return await servicesemployee.addemployeelist(url, empmodal).then(res => {
        if (res.Status === "Success") {
         // alert("Registered Successfully");
        }
    }); 
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(alert(error)));
    }
  }
);

// Delete Employee
export const deletemployee = createAsyncThunk( 
  "userSlice/deletemployee",
  async (url, thunkAPI) => {
    try {
      return await servicesemployee.deletemployeelist(url).then(res => {
        if (res.Status === "Success") {
          alert("Employee Delete Successfully");
        }
    }); 
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(alert(error)));
    }
  }
);





export const userSlice = createSlice({
  name: "userSlice", 
  initialState,
  extraReducers: (builder) => {
    
   
    // Get Employee
    builder
      .addCase(fetchemployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchemployee.fulfilled, (state, action) => {
        state.employeelist = action.payload;
        state.loading = false;
      })
      .addCase(fetchemployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

       // add Employee
    builder
    .addCase(addemployee.pending, (state) => {
      state.loading = true;
    })
    .addCase(addemployee.fulfilled, (state, action) => {
      state.addemployee = action.payload;
      state.loading = false;
    })
    .addCase(addemployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload; 
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer; 
