import { configureStore, combineReducers } from "@reduxjs/toolkit";
//= Reducers
import commonReducer from "./slices/common";

export const store = configureStore({
  reducer: combineReducers({
    common: commonReducer
  }),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;