import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./features/popupSlice";
import employeeReducer from "./features/employeeSlice";


const store = configureStore({
  reducer: {
    popup: popupReducer,
    employee: employeeReducer,
  },
});

export default store;