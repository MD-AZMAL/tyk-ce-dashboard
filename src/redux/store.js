import { configureStore } from "@reduxjs/toolkit";
import tykServerReducer from "./tykServer/tykServerSlice";
import apiResponseReducer from "./apiResponse/apiResponseSlice";
export default configureStore({
  reducer: {
    tykServer: tykServerReducer,
    apiResponse: apiResponseReducer,
  },
});
