import { Component, OnInit } from '@angular/core';

import ITodoItem from 'src/models/ITodoItem.model';
import { TodoLocalStorageService } from 'src/services/todo-local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public todos: ITodoItem[] = [];

  constructor(private _todoService: TodoLocalStorageService) {

  }

  ngOnInit(): void {
    this._todoService.getAll(true)

      .then(items => this.todos = items);
  }
}
