import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
    changeFilterNumber: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter, changeFilterNumber } = slice.actions;
export const filterReducer = slice.reducer;
