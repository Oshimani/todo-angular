import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import ITodoItem from 'src/models/ITodoItem.model';
import { TodoLocalStorageService } from 'src/services/todo-local-storage.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() itemAdded: EventEmitter<ITodoItem> = new EventEmitter<ITodoItem>();
  public todo: ITodoItem = {} as ITodoItem;

  constructor(private _todoService: TodoLocalStorageService) { }

  ngOnInit() {

  }

  public onClickAdd() {
    this._todoService.create(this.todo)

      .then(newItem => this.itemAdded.emit(newItem));
  }

  public onClickImportant(isImportant: boolean) {
    this.todo.isImportant = isImportant;
  }

  public getImportanceIcon() {
    if (this.todo.isImportant === true) return 'offline_bolt';
    if (this.todo.isImportant === false) return 'assignment';
    return 'add_circle_outline';
  }

}
