import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialStateType = { name: 'ahmad eid' };

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
});

export const commonSliceActions = commonSlice.actions;
export default commonSlice.reducer;

export interface InitialStateType {
  name: string;
}