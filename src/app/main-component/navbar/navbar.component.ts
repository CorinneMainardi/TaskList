import { Component } from '@angular/core';
import { iTodo } from '../../interfaces/i-todo';
import { TodosService } from '../../service/todos.service';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isVisible: boolean = false;
  //i punti interr sono stati inseriti perchè noi inizialmente non abbiamo questi valori nei vari array, arrivano "dopo"...quando incrociamo i dati

  constructor(private toDoSvc: TodosService, private usersSvc: UsersService) {}

  toggleNavbarB() {
    this.isVisible = !this.isVisible;
  }
}
