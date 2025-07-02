import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) return [];
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Load from localStorage failed:", e);
    return [];
  }
};

const initialState = {
    todos: loadFromLocalStorage()
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((prev) => prev.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload
            const todo = state.todos.find((prev) => prev.id === id)
            if(todo){
              todo.text = text
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer