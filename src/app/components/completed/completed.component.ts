import { Component } from '@angular/core';
import { iTodo } from '../../interfaces/i-todo';
import { TodosService } from '../../service/todos.service';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  toDoArr: iTodo[] = [];

  tasksDoneArr: iTodo[] = [];

  constructor(private toDoSvc: TodosService, private usersSvc: UsersService) {}

  ngOnInit() {
    this.toDoSvc.getTaskDone();
    this.tasksDoneArr = this.toDoSvc.tasksDoneArr;
    const users = this.usersSvc.getUsers();
    this.toDoSvc.getTodoListOfUser(users);
    console.log(this.tasksDoneArr);
    console.log('Tasks completati:', this.tasksDoneArr);
  }
}
