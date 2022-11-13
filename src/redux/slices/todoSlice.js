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
    updateTodo: (state, action) => {
      const data = localStorage.getItem('todoList');

      if (data) {
        const todoList = JSON.parse(data);

        todoList.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.status = action.payload.status;
          }
        });

        state.todoList = todoList;
        localStorage.setItem('todoList', JSON.stringify(todoList));
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, updateFilterStatus } = todoSlice.actions;
export default todoSlice.reducer;
