import { Component, Input } from '@angular/core';
import { iTodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() todo!: iTodo;
  isCompleted: boolean = false;
}
