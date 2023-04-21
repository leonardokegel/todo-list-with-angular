import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  listItem: string = '';
  items: Array<{ id: number, name: string, completed: boolean }> = [];

  addNewItem() {
    this.items.push({
      id: Math.round(Math.random() * 1000),
      name: this.listItem,
      completed: false
    });

    this.listItem = '';
  }

}
