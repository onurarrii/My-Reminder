import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoListReducer from '../modules/todoList/slices/todoListSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistableTodoListReducer = persistReducer(
  persistConfig,
  todoListReducer,
);

export const store = configureStore({
  reducer: {
    todoList: persistableTodoListReducer,
  },
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
