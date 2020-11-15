import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import {
  completeTodo,
  createTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
  getAllTodosError,
  getAllTodosSuccess,
} from '../actions';
import Todo from '../models/todo.model';

//export const initialState: Todo[] = [new Todo('My First Task')];

export interface todoState {
  todos: Todo[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: todoState = {
  todos: [new Todo('My First Task')],
  loading: false,
  loaded: false,
  error: null,
};

const _todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { title }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos, new Todo(title)],
  })),

  on(completeTodo, (state, { id }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      } else {
        return todo;
      }
    }),
  })),

  on(deleteTodo, (state, { id }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: state.todos.filter((todo) => {
      return todo.id !== id;
    }),
  })),

  on(editTodo, (state, { id, title }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: title };
      } else {
        return todo;
      }
    }),
  })),

  on(getAllTodos, (state) => ({ ...state, loading: true })),

  on(getAllTodosSuccess, (state, { todos }) => ({
    ...state,
    loading: false,
    loaded: true,
    todos: [...todos],
  })),

  on(getAllTodosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
