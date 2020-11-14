import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import Todo from '../models/todo.model';
import { completeTodo, deleteTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;

  public isEditing: boolean = false;
  public editTaskFrom: FormGroup;
  public titleInput: FormControl;

  constructor(
    private formbuilder: FormBuilder,
    private store: Store<{ todos: Todo[] }>
  ) {}

  ngOnInit(): void {
    this.titleInput = new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]);

    this.editTaskFrom = this.formbuilder.group({
      title: this.titleInput,
    });
  }

  submitTask() {
    this.isEditing = false;
    console.log(this.titleInput);
  }

  editTask() {
    this.isEditing = true;
  }

  completeTask() {
    this.store.dispatch(completeTodo({ id: this.todo.id }));
  }

  deleteTask() {
    this.store.dispatch(deleteTodo({ id: this.todo.id }));
  }
}
