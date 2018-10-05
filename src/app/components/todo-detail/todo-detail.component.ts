import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../classes/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  private saveText: string;

  constructor(private todoService: TodoService) {
    this.saveText = '';
  }

  ngOnInit() {
  }

  private onSave() {
    this.todoService.onSave(this.saveText);
  }
}
