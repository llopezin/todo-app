import { Action, createReducer, on } from '@ngrx/store';
import Todo from './models/todo.model';
import * as todoActions from './todo.actions';

export const initialState: Todo[] = [new Todo('My First Task')];

const _todoReducer = createReducer(
  initialState,
  on(todoActions.createTodo, (state, { title }) => [...state, new Todo(title)]),
  on(todoActions.completeTodo, (state, { id }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    })
  ),

  on(todoActions.deleteTodo, (state, { id }) =>
    state.filter((todo) => {
      return todo.id !== id;
    })
  )
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
