import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const showmovie = createAsyncThunk("showmovie", async (data) => {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",{

      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTg1YjhmMTliMTk2N2Y3MjA4NjY1M2JlNjg4N2VlYSIsInN1YiI6IjY0Mzc3MjEwMzdiM2E5MDA5NDlkMjhjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VIETsvx7YIo4HzfVPyQgecMwmE3Rzp3B9azSV8PUXy0"
      }
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error.response);
    }
  });