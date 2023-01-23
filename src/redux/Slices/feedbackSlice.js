import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
  name: "email",
  initialState: {
    data: [],
  },

  reducers: {
    fillTextAction: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { fillTextAction } = feedbackSlice.actions;

const feedbackReducer = feedbackSlice.reducer;
export default feedbackReducer;
