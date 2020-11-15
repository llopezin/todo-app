import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}
}
