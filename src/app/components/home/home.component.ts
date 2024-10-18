import { Component } from '@angular/core';
import { TodosService } from '../../service/todos.service';
import { iTodo } from '../../interfaces/i-todo';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  todoArr: iTodo[] = [];
  searchQuery: string = '';
  constructor(private toDoSvc: TodosService, private usersSvc: UsersService) {}
  ngOnInit() {
    this.todoArr = this.toDoSvc.toDoArr;
  }
  // filterTodo(): void {
  //   this.todoArr = this.toDoSvc.search(this.searchQuery);
  // }
}
