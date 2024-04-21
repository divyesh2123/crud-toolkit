import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const showmovie = createAsyncThunk("showmovie", async (data) => {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error.response);
    }
  });