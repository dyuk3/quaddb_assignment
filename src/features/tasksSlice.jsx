import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const { name, id } = action.payload;
      const newItem = {
        name: name,
        id: id,
        completed: false,
      };
      name.length >= 3 && state.push(newItem);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    editTask: (state, action) => {
      const { id, name } = action.payload;
      const taskToEdit = state.find((task) => task.id === id);
      if (taskToEdit) {
        taskToEdit.name = name;
      }
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);
      // localStorage.setItem('TodoItems', JSON.stringify(newState));
      localStorage.setItem('tasks', JSON.stringify(newState));
      return (state = newState);
    },
    populateData: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addTask, deleteTask, editTask, populateData } = todoSlice.actions;

export default todoSlice.reducer;
