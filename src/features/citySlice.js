import { createSlice } from "@reduxjs/toolkit";


export const citySlice = createSlice({
  name: "cityList",
  initialState: { value: [] },

  reducers: {
    addItems: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addItems } = citySlice.actions;

export default citySlice.reducer;
