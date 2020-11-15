import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import Todo from '../models/todo.model';
import { createTodo } from '../actions/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  public addTodoForm: FormGroup;
  public title: FormControl;

  constructor(
    private fb: FormBuilder,
    private todoStore: Store<{ todos: Todo[] }>
  ) {}

  ngOnInit(): void {
    this.title = new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]);

    this.addTodoForm = this.fb.group({
      title: this.title,
    });
  }

  onSubmit() {
    if (this.addTodoForm.status === 'INVALID') return;

    this.todoStore.dispatch(createTodo({ title: this.title.value }));

    this.title.reset();
  }
}
