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
  todosUserName: iTodo[] = [];
  filteredTodos: iTodo[] = [];
  searchQuery: string = '';
  constructor(private toDoSvc: TodosService, private usersSvc: UsersService) {}
  ngOnInit() {
    const users = this.usersSvc.getUsers();

    this.todoArr = this.toDoSvc.toDoArr;
    this.todosUserName = this.toDoSvc.getTodoListOfUser(users);
    this.filteredTodos = this.todosUserName;
  }
  onSearch() {
    //funzione di ricerca nell'input
    const query = this.searchQuery.toLowerCase();
    if (query) {
      const filteredUsers = this.usersSvc.searchTodosByUserName(
        this.todosUserName,
        query
      );
      this.filteredTodos = filteredUsers.flatMap((user) => user.todos ?? []);
    } else {
      this.filteredTodos = this.todosUserName;
    }
  }
}
