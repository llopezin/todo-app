import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {
    return Object.assign(this.http.get('../assets/mocks/todos.json'));
  }
}
