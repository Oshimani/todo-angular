import { Component, OnInit, Input } from '@angular/core';
import ITodoItem from 'src/models/ITodoItem.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodoItem;

  constructor() { }

  ngOnInit() {
  }

  public getImportanceIcon() {
    if (this.todo.isImportant === true) return 'offline_bolt';
    return 'assignment';
  }

  public onClickComplete() {

  }
  public onClickDelete() {

  }

}
