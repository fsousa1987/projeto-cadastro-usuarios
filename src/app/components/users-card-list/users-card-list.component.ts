import {Component, Input} from '@angular/core';
import {UsersListResponse} from '../../types/users-list-response';

@Component({
  selector: 'app-users-card-list',
  standalone: false,

  templateUrl: './users-card-list.component.html',
  styleUrl: './users-card-list.component.scss'
})
export class UsersCardListComponent {
  @Input() usersList: UsersListResponse = [];
}
