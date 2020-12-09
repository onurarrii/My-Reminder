import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from '../modules/todoList/slices/todoListSlice';

const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});

export default store;
