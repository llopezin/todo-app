import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import Todo from '../models/todo.model';
import { completeTodo, deleteTodo, editTodo } from '../actions/todo.actions';

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

    this.store.dispatch(
      editTodo({ id: this.todo.id, title: this.titleInput.value })
    );
  }

  editTask() {
    this.isEditing = true;
    this.titleInput.setValue(this.todo.title);
  }

  completeTask() {
    this.store.dispatch(completeTodo({ id: this.todo.id }));
  }

  deleteTask() {
    this.store.dispatch(deleteTodo({ id: this.todo.id }));
  }
}
