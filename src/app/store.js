import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/tasksSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
