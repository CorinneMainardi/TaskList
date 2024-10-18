import { UsersService } from './../../service/users.service';
import { Component } from '@angular/core';
import { TodosService } from '../../service/todos.service';
import { iTodo } from '../../interfaces/i-todo';
import { iUsers } from '../../interfaces/i-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  toDoArr: iTodo[] = [];
  userArr: iUsers[] = [];

  constructor(private toDoSvc: TodosService, private usersSvc: UsersService) {}

  ngOnInit() {
    this.toDoArr = this.toDoSvc.getToDoArr();
    this.userArr = this.usersSvc.getUserWithToDo(this.toDoArr);
    this.toDoSvc.getTodoListOfUser(this.userArr);
  }
  hasToDos(user: iUsers): boolean {
    return Array.isArray(user.toDo) && user.toDo.length > 0;
  }
}
