import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodoAddComponent, TodoListComponent, TodoListItemComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [TodoAddComponent, TodoListComponent, TodoListItemComponent],
})
export class TodosModule {}
