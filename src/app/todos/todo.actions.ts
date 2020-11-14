import { createAction, props } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';

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
  props<{ id: number }>()
);
