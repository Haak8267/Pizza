// src/store/useTodoStore.js
import { create } from 'zustand'

const useTodoStore = create((set) => ({
  // ✅ Initial state: an empty list of todos
  todos: [],

  // ✅ Action to add a todo
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos,
        {
          id: Date.now(),       // generate a unique ID
          text: text,           // the todo text
          completed: false,     // default status
        },
      ],
    })),



  // ✅ Action to toggle a todo's completed state
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      ),
    })),

  // ✅ Action to delete a todo
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),



  // ✅ Action to update a todo's text
  updateTodo: (id, newText) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
    })),
}))

export default useTodoStore;