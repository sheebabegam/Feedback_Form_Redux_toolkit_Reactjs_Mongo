import { configureStore } from "@reduxjs/toolkit";
import feedbackSlice from "../Slices/feedbackSlice";

const store = configureStore({
  reducer: {
    country: feedbackSlice,
  },
});

export default store;
