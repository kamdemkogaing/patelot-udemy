import { configureStore } from "@reduxjs/toolkit";
import boxProperties from "./features/boxProperties";
import shadows from "./features/shadows";

export const store = configureStore({
  reducer: {
    shadows,
    boxProperties,
  },
});
