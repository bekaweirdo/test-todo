import {Injectable} from '@angular/core';
import {Todo} from '../classes/todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  // private todos: Todo[];
  private todoId: number;

  constructor() {
    let todos = this.getTodos();

    if (todos.length === 0) {
      this.todoId = 0;
    } else {
      let maxId = todos[todos.length - 1].id;
      this.todoId = maxId + 1;
    }
  }

  public addTodos(text: string) {
    let item = new Todo(this.todoId, text);
    let todos = this.getTodos();
    todos.push(item);
    this.setLocalStorageTodos(todos);
    this.todoId++;
  }

  public removeTodo(id: number): void {
    let todos = this.getTodos();
    todos = todos.filter((todo) => todo.id !== id);
  }

  public editTodo(todo: Todo): void {
    console.log(todos[todo.text]);
    let todos = this.getTodos();
    todos[todo.text] = todo.text;
    this.setLocalStorageTodos(todos);
  }

  public getTodos(): Todo[] {
    let localStorageItem = JSON.parse(localStorage.getItem('todos'));
    return localStorageItem == null ? [] : localStorageItem.todos;
  }

  private setLocalStorageTodos(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify({todos: todos}));
  }

  public getEdit(todo: Todo) {
    return todo;
  }

  public onSave(save: string) {
    console.log(`${save}`);
    let todos = this.getTodos();
    this.setLocalStorageTodos(todos);
  }
}
