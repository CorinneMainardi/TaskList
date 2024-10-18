import { SearchStrategy } from './../../../../node_modules/cosmiconfig/dist/types.d';
import { Component } from '@angular/core';
import { TodosService } from '../../service/todos.service';
import { iTodo } from '../../interfaces/i-todo';
import { UsersService } from '../../service/users.service';
import { iUsers } from '../../interfaces/i-users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  filteredUsers: iUsers[] = [];
  filtered: iTodo[] = [];
  todoArr: iTodo[] = [];
  searchQuery: string = '';
  constructor(private toDoSvc: TodosService, private usersSvc: UsersService) {}
  ngOnInit() {
    this.todoArr = this.toDoSvc.toDoArr;
    this.usersSvc.searchedUser$.subscribe((string) => {
      this.searchQuery = string;
    });
  }
  ngDoCheck() {
    if (this.searchQuery)
      this.filtered = this.todoArr.filter((filteredD) => {
        console.log(filteredD.userName);
        console.log(this.searchQuery);
        if (filteredD.userName) {
          filteredD.userName
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
          // console.log(this.filteredUsers);
        }
      });
  }
}
