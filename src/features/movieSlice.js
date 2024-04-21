import { createSlice } from "@reduxjs/toolkit";
import { showmovie } from "./movieAction";


//create Slice
export const movieDetail = createSlice({
  name: "userDetail",
  initialState: {
     movie: [],
    loading: false,
    error: null,
    
  },
 
  extraReducers: {
   
   
    [showmovie.pending]: (state, action) => {
      state.loading = true;
    },
    [showmovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.movie = action.payload;
      console.log(state.users);
    },
    [showmovie.rejected]: (state, action) => {
      state.loading = true;
      state.movie = action.payload;
    },
   
   
   
   
  },
});


export default movieDetail.reducer;
