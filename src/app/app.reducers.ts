import { ActionReducerMap } from '@ngrx/store';
import Todo from './todos/models/todo.model';
import * as reducers from './todos/reducers';
import { todoReducer } from './todos/reducers';

export interface AppState {
  todosApp: reducers.todoState;
}

export const appReducers: ActionReducerMap<AppState> = {
  todosApp: reducers.todoReducer,
};
