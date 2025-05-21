import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const slice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = slice.actions;
export const todosReducer = slice.reducer;
