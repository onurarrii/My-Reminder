import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodoModel, ITodoModelWithId } from '../../todo/model/TodoModel';
import { uid } from '../../../common/utils';

export interface ITodoListState {
  todos: ITodoModelWithId[];
}

const initialState: ITodoListState = {
  todos: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state: ITodoListState, action: PayloadAction<ITodoModel>) => {
      const { todos } = state;
      const todo = { id: uid(), ...action.payload };
      todos.splice(0, 0, todo);
    },
    removeTodo: (
      state: ITodoListState,
      action: PayloadAction<ITodoModelWithId>,
    ) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (
      state: ITodoListState,
      action: PayloadAction<ITodoModelWithId>,
    ) => {
      const oldTodo = state.todos.find((todo) => todo.id === action.payload.id);
      Object.assign(oldTodo, action.payload);
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoListSlice.actions;

type SelectorState = { todoList: ITodoListState };

export const selectTodoList = (state: SelectorState): ITodoModelWithId[] =>
  state.todoList.todos;

export const selectTodoListIds = (state: SelectorState): string[] =>
  state.todoList.todos.map((todo) => todo.id);

export const getSelectWithId = (id: string) => {
  return (state: SelectorState): ITodoModelWithId => {
    const todo = state.todoList.todos.find((_todo) => _todo.id === id);
    if (!todo) {
      throw new Error(`There exists no todo with id: ${id}`);
    }
    return todo;
  };
};

export default todoListSlice.reducer;
