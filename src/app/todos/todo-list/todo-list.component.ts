import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Todo from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public todos: Todo[];

  constructor(private store: Store<{ todos: Todo[] }>) {}

  ngOnInit(): void {
    this.store.select('todos').subscribe((todos) => {
      this.todos = todos;
    });
  }
}
