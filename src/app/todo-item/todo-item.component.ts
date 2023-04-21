import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() item: {
    id: number,
    name: string,
    completed: boolean
  } = {
    id: 0,
    name: '',
    completed: false
  };

  @Output() onCheck = new EventEmitter<{ id: number, name: string, completed: boolean }>();

  textClass: string = '';

  onCheckboxChange(event: any) {
    this.textClass = event.target.checked ? 'completed-task' : '';
  }


}
