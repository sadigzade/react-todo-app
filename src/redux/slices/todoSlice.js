import { createSlice } from '@reduxjs/toolkit';

import { getInitialTodo } from '../../utils/getInitialTodo';

const initialState = getInitialTodo();

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);

      const data = localStorage.getItem('todoList');

      if (data) {
        const todoList = JSON.parse(data);
        todoList.push({
          ...action.payload,
        });
        localStorage.setItem('todoList', JSON.stringify(todoList));
      } else {
        localStorage.setItem('todoList', JSON.stringify([{ ...action.payload }]));
      }
    },
    deleteTodo: (state, action) => {
      const data = localStorage.getItem('todoList');

      if (data) {
        const todoList = JSON.parse(data);

        state.todoList = todoList.filter((todo) => todo.id !== action.payload);
        localStorage.setItem('todoList', JSON.stringify(state.todoList));
      }
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
