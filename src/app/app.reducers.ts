import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './todos/reducers';

export interface AppState {
  todosApp: reducers.todoState;
}

export const appReducers: ActionReducerMap<AppState> = {
  todosApp: reducers.todoReducer,
};
