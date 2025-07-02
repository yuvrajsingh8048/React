// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../feature/todoSlice'

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.todos.todos);
    localStorage.setItem('todos', serializedState);
  } catch (e) {
    console.warn("Save to localStorage failed:", e);
  }
};

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
