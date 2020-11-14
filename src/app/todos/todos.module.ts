import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoAddComponent, TodoListComponent, TodoListItemComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoAddComponent, TodoListComponent, TodoListItemComponent],
})
export class TodosModule {}
