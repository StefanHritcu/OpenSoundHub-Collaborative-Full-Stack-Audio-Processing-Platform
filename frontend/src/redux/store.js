import { configureStore } from "@reduxjs/toolkit";
import { initialSliceReducer } from "./slices/initialSlice";

export default configureStore({
  reducer: {
    statoIniziale: initialSliceReducer,
  },
});
