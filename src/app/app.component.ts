import {Component, OnInit} from '@angular/core';
import {UsersService} from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usersList: any = [];

  constructor(private readonly _usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
      console.log(usersListResponse);
    });
  }

}
