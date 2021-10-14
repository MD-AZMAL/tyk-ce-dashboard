import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: null,
};

export const apiResponseSlice = createSlice({
  name: "apiResponse",
  initialState,
  reducers: {
    setApiResponse: (state, action) => {
      state.response = { ...action.payload };
    },
    clearApiResponse: (state) => {
      state.response = null;
    },
  },
});

export const { setApiResponse, clearApiResponse } = apiResponseSlice.actions;

export default apiResponseSlice.reducer;
