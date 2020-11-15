import { createAction, props } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import Todo from '../models/todo.model';

export const createTodo = createAction(
  '[TODO] Create Todo',
  props<{ title: string }>()
);
export const completeTodo = createAction(
  '[TODO] Complete Todo',
  props<{ id: number }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);
export const editTodo = createAction(
  '[TODO] Edit Todo',
  props<{ id: number; title: string }>()
);

export const getAllTodos = createAction('[TODO] Get All');
export const getAllTodosSuccess = createAction(
  '[TODO] Get All Success',
  props<{ todos: Todo[] }>()
);
export const getAllTodosError = createAction(
  '[TODO] Get All Error',
  props<{ payload: any }>()
);
