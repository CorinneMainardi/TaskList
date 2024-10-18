import { Component } from '@angular/core';
import { iTodo } from '../../interfaces/i-todo';
import { TodosService } from '../../service/todos.service';
import { UsersService } from '../../service/users.service';
import { iUsers } from '../../interfaces/i-users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isVisible: boolean = false;
  users: iUsers[] = [];
  filteredUsers: iUsers[] = [];
  searchQuery: string = '';
  constructor(private usersSvc: UsersService) {}
  ngOnInit(): void {
    this.users = this.usersSvc.getUsers();
    this.filteredUsers = this.users;
  }
  search(): void {
    this.usersSvc.searchedUser$.next(this.searchQuery);
  }
  toggleNavbarB() {
    this.isVisible = !this.isVisible;
  }
}
