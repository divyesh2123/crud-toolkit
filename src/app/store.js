import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetailsSlice";
import { movieDetail } from "../features/movieSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
    movie:movieDetail
  },
});
