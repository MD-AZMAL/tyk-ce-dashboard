import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tykServer: null,
  activeId: 0,
};

export const tykServerSlice = createSlice({
  name: "tykServer",
  initialState,
  reducers: {
    setTykServer: (state, action) => {
      state.tykServer = { ...action.payload };
    },
    clearTykServer: (state) => {
      state.tykServer = null;
    },
    setActiveId: (state, action) => {
      state.activeId = action.payload;
    },
  },
});

export const { setTykServer, clearTykServer, setActiveId } =
  tykServerSlice.actions;

export default tykServerSlice.reducer;
